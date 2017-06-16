import { NgModule } from '@angular/core';
import { ROUTES } from './app.routing';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { 
  MdMenuModule,
  MdSidenavModule, 
  MdButtonModule, 
  MdToolbarModule,
  MdIconModule,
  MdListModule
} from '@angular/material';

import { TournamentModule } from './tournament/tournament.module';

import { AppComponent }  from './app.component';
import { HomeComponent }  from './home/home.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
  	TournamentModule,
    MdMenuModule,
    MdSidenavModule,
    MdButtonModule,
    MdToolbarModule,
    MdIconModule,
    MdListModule,
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
