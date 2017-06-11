import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Coucou {{name}}</h1><player-details></player-details>`,
})
export class AppComponent  { 
	name = 'Angular';
}
