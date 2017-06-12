import { Component, Input } from '@angular/core';

import { Player } from './player';

@Component({
  selector: 'player-details',
  template: `<h2 *ngIf="player">{{player.name}}</h2>`,
})

export class PlayerDetailsComponent { 
	@Input() player: Player;
}