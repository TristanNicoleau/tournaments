import { Component, Input, Output, OnInit, OnChanges, EventEmitter, SimpleChanges } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Tournament } from '../tournament';

@Component({
	selector: 'tn-tournament-edit',
	templateUrl: './tournament-edit.component.html'
})

export class TournamentEditComponent implements OnChanges {
	@Input() tournament: Tournament;
	@Output() tournamentSubmitted = new EventEmitter();

	form: FormGroup;

	constructor() {
		this.form = new FormGroup({
			name: new FormControl('', Validators.required),
			players: new FormControl('', Validators.required),
			game: new FormControl('', Validators.required)
		});
	}

	ngOnChanges(changes: SimpleChanges) {
		if(changes['tournament']){
			this.form.setValue({
				name: this.tournament.name,
				players: this.tournament.players,
				game: this.tournament.game
			});
		}
	}

	submitTournament() {
		this.tournamentSubmitted.emit(
			Object.assign(
				{}, 
				this.tournament,
				{
					name: this.form.value.name,
					players: this.form.value.players,
					game: this.form.value.game
				}
			)
		)
	}
}