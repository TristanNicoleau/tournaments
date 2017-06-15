import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Tournament } from '../tournament';

import { TournamentService } from '../tournament.service';

@Component({
	selector: 'tn-tournaments-list',
	templateUrl: './tournaments-list.component.html'
})

export class TournamentsListComponent {
	constructor(private tournamentService: TournamentService){}

	tournaments$: Observable<Array<Tournament>>;
	addFlag: boolean = false;

	ngOnInit() {
		// init
		this.tournamentService.fetch();
		this.tournaments$ = this.tournamentService.tournaments$;
	}
}