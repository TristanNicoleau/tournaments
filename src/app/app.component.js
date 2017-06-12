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
var player_service_1 = require("./player.service");
var AppComponent = (function () {
    function AppComponent(playerService) {
        this.playerService = playerService;
    }
    AppComponent.prototype.getPlayers = function () {
        var _this = this;
        this.playerService.getPlayers().then(function (players) { return _this.players = players; });
    };
    AppComponent.prototype.ngOnInit = function () {
        this.getPlayers();
    };
    AppComponent.prototype.onSelect = function (player) {
        this.selectedPlayer = player;
        debugger;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "<h1>Coucou {{name}}</h1>\n  \t\t\t<h2>My Players</h2>\n\t\t    <ul class=\"players\">\n\t\t      <li *ngFor=\"let player of players\"\n\t\t        [class.selected]=\"player === selectedPlayer\"\n\t\t        (click)=\"onSelect(player)\">\n\t\t        <span class=\"badge\">{{player.id}}</span> {{player.name}}\n\t\t      </li>\n\t\t    </ul>\n  \t\t\t<player-details [player]=\"selectedPlayer\"></player-details>",
        providers: [player_service_1.PlayerService]
    }),
    __metadata("design:paramtypes", [player_service_1.PlayerService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map