import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/share';

import { Tournament } from './tournament';

const API_URL = 'http://localhost:3005/tournaments';

@Injectable()
export class TournamentService {
	public tournaments$: BehaviorSubject<Tournament[]> = new BehaviorSubject([]);
	
	constructor(private http: Http) {}

	fetch() {
		return this.http.get(API_URL)
			.map(response => response.json())
			.subscribe(tournaments => this.tournaments$.next(tournaments));
	}

	get(id: number): Observable<Tournament> {
		const obs$ = this.http.get(`${API_URL}/${id}`)
			.share()
			.map(response => response.json());

		obs$.subscribe(tournament => {});

		return obs$;
	}

	save(tournament: Tournament): Observable<Tournament> {
		if (!!tournament.id) {
			return this._update(tournament);
		} else {
			return this._create(tournament);
		}
	}

	_create(tournament: Tournament): Observable<Tournament> {
		const obs$ = this.http.post(API_URL, tournament)
			.share()
			.map(response => response.json());

		obs$.subscribe(tournament => {
			const newTournaments = this.tournaments$.getValue()
				.concat(tournament)
			this.tournaments$.next(newTournaments);
		});

		return obs$;
	}

	_update(tournament: Tournament): Observable<Tournament> {
		const obs$ = this.http.put(`${API_URL}/${tournament.id}`, tournament)
			.share()
			.map(response => response.json());

		obs$.subscribe(tournament => {
			const newTournaments = this.tournaments$.getValue()
				.map(x => x.id === tournament.id ? tournament : x)
			this.tournaments$.next(newTournaments);
		});

		return obs$;
	}
}