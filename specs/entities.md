Project entities
====================

### Tournament
* id: number
* name: string
* games: Array<Match>

### Match
* id: number
* status: Status
* homeScore: number
* awayScore: number
* homePlayer: Player
* awayPlayer: Player

### Status
* id: number
* name: string

### Player
* id: number
* name: string

### Game
* id: number
* name: string
* categories: Array<Category>

### Category
* id: number
* name: string
