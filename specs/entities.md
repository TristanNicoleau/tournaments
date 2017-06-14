Project entities
====================

### Tournament
id: number
name: string
matches: Array<Match>
game: Game

### Match
id: number
status: Status
home: Result
away: Result

### Result
score: number
player: Player

### Status
id: number
name: string

### Player
id: number
name: string

### Game
id: number
name: string
categories: Array<Category>

### Category
id: number
name: string
