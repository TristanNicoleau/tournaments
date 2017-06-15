import { Routes, RouterModule } from '@angular/router';

// import { AppComponent } from './app.component';

import { TournamentsListComponent } from './tournament/list/tournaments-list.component';
import { TournamentEditComponent } from './tournament/edit/tournament-edit.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  { path: 'tournaments', component: TournamentsListComponent },
  { path: 'tournaments/create', component: TournamentEditComponent },
  { path: 'home', component: HomeComponent },
  { path: '**', redirectTo: 'home' }
];

export const ROUTES = RouterModule.forRoot(appRoutes);