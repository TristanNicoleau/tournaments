"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var player_constant_1 = require("./player.constant");
var PlayerService = (function () {
    function PlayerService() {
    }
    PlayerService.prototype.getPlayers = function () {
        return Promise.resolve(player_constant_1.PLAYERS);
    };
    return PlayerService;
}());
PlayerService = __decorate([
    core_1.Injectable()
], PlayerService);
exports.PlayerService = PlayerService;
//# sourceMappingURL=player.service.js.map