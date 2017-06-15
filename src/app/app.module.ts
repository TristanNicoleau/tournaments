import { NgModule }      from '@angular/core';
import { ROUTES } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';

import { TournamentModule } from './tournament/tournament.module';

import { AppComponent }  from './app.component';
import { HomeComponent }  from './home/home.component';

@NgModule({
  imports:      [ 
  	BrowserModule,
  	TournamentModule,
		ROUTES
  ],
  declarations: [ 
  	AppComponent,
  	HomeComponent
  ],
  bootstrap:    [ 
  	AppComponent
 ]
})
export class AppModule { }
