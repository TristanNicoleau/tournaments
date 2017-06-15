import { Match } from './match';
import { Game } from './game';
import { Player } from './player';

export class Tournament {
	id: number;
	name: string;
	matches: Array<Match>;
	game: Game;
	players: Array<Player>;
}