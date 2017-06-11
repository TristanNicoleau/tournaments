import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { PlayerDetailsComponent }  from './player-details.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ 
  	AppComponent,
  	PlayerDetailsComponent
  ],
  bootstrap:    [ 
  	AppComponent,
  	PlayerDetailsComponent
 ]
})
export class AppModule { }
