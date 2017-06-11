import { Component } from '@angular/core';

export class Player {
  id: number;
  name: string;
}

const PLAYERS: Player[] = [
  { id: 11, name: 'Mr. Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];

@Component({
  selector: 'player-details',
  template: `<h2 (click)="toto()">Je suis un player</h2>`,
})
export class PlayerDetailsComponent  { 
	name = 'PlayerDetails';
	selectedPlayer: Player;
	
	toto(): void {
	  this.selectedPlayer = PLAYERS[2];
	}
}

