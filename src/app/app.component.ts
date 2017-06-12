import { Component, OnInit } from '@angular/core';

import { Player } from './player';
import { PlayerService } from './player.service';

@Component({
  selector: 'my-app',
  template: `<h1>Coucou {{name}}</h1>
  			<h2>My Players</h2>
		    <ul class="players">
		      <li *ngFor="let player of players"
		        [class.selected]="player === selectedPlayer"
		        (click)="onSelect(player)">
		        <span class="badge">{{player.id}}</span> {{player.name}}
		      </li>
		    </ul>
  			<player-details [player]="selectedPlayer"></player-details>`,
  providers: [PlayerService]
})
export class AppComponent implements OnInit { 
	players: Player[];
	selectedPlayer: Player;

	constructor(private playerService: PlayerService){}

	getPlayers(): void {
		this.playerService.getPlayers().then(players => this.players = players);
	}

	ngOnInit(): void {
		this.getPlayers();
	}

	onSelect(player: Player): void {
		this.selectedPlayer = player;
		debugger;
	}
}
