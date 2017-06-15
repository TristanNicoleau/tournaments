import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { TournamentService } from './tournament.service';

import { TournamentEditComponent } from './edit/tournament-edit.component';
import { TournamentsListComponent } from './list/tournaments-list.component';

@NgModule({
  imports: [
  	BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  declarations: [
  	TournamentEditComponent,
  	TournamentsListComponent
  ],
  providers: [ TournamentService ]
})

export class TournamentModule {}
