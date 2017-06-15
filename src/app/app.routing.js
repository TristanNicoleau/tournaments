"use strict";
var router_1 = require("@angular/router");
// import { AppComponent } from './app.component';
var tournaments_list_component_1 = require("./tournament/list/tournaments-list.component");
var tournament_edit_component_1 = require("./tournament/edit/tournament-edit.component");
var home_component_1 = require("./home/home.component");
var appRoutes = [
    { path: 'tournaments', component: tournaments_list_component_1.TournamentsListComponent },
    { path: 'tournaments/create', component: tournament_edit_component_1.TournamentEditComponent },
    { path: 'home', component: home_component_1.HomeComponent },
    { path: '**', redirectTo: 'home' }
];
exports.ROUTES = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map