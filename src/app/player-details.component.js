"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var Player = (function () {
    function Player() {
    }
    return Player;
}());
exports.Player = Player;
var PLAYERS = [
    { id: 11, name: 'Mr. Nice' },
    { id: 12, name: 'Narco' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
    { id: 15, name: 'Magneta' },
    { id: 16, name: 'RubberMan' },
    { id: 17, name: 'Dynama' },
    { id: 18, name: 'Dr IQ' },
    { id: 19, name: 'Magma' },
    { id: 20, name: 'Tornado' }
];
var PlayerDetailsComponent = (function () {
    function PlayerDetailsComponent() {
        this.name = 'PlayerDetails';
    }
    PlayerDetailsComponent.prototype.toto = function () {
        this.selectedPlayer = PLAYERS[2];
    };
    return PlayerDetailsComponent;
}());
PlayerDetailsComponent = __decorate([
    core_1.Component({
        selector: 'player-details',
        template: "<h2 (click)=\"toto()\">Je suis un player</h2>",
    })
], PlayerDetailsComponent);
exports.PlayerDetailsComponent = PlayerDetailsComponent;
//# sourceMappingURL=player-details.component.js.map