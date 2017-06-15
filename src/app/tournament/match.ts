import { Status } from './status';
import { Result } from './result';

export class Match {
	id: number;
	status: Status;
	home: Result;
	away: Result;
}