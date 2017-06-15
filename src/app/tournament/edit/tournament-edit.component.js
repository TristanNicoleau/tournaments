"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var tournament_1 = require("../tournament");
var TournamentEditComponent = (function () {
    function TournamentEditComponent() {
        this.tournamentSubmitted = new core_1.EventEmitter();
        this.form = new forms_1.FormGroup({
            name: new forms_1.FormControl('', forms_1.Validators.required),
            players: new forms_1.FormControl('', forms_1.Validators.required),
            game: new forms_1.FormControl('', forms_1.Validators.required)
        });
    }
    TournamentEditComponent.prototype.ngOnChanges = function (changes) {
        if (changes['tournament']) {
            this.form.setValue({
                name: this.tournament.name,
                players: this.tournament.players,
                game: this.tournament.game
            });
        }
    };
    TournamentEditComponent.prototype.submitTournament = function () {
        this.tournamentSubmitted.emit(Object.assign({}, this.tournament, {
            name: this.form.value.name,
            players: this.form.value.players,
            game: this.form.value.game
        }));
    };
    return TournamentEditComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", tournament_1.Tournament)
], TournamentEditComponent.prototype, "tournament", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], TournamentEditComponent.prototype, "tournamentSubmitted", void 0);
TournamentEditComponent = __decorate([
    core_1.Component({
        selector: 'tn-tournament-edit',
        templateUrl: './tournament-edit.component.html'
    }),
    __metadata("design:paramtypes", [])
], TournamentEditComponent);
exports.TournamentEditComponent = TournamentEditComponent;
//# sourceMappingURL=tournament-edit.component.js.map