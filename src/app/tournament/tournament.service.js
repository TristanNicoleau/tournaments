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
var http_1 = require("@angular/http");
var BehaviorSubject_1 = require("rxjs/BehaviorSubject");
require("rxjs/add/operator/map");
require("rxjs/add/operator/share");
var API_URL = 'http://localhost:3005/tournaments';
var TournamentService = (function () {
    function TournamentService(http) {
        this.http = http;
        this.tournaments$ = new BehaviorSubject_1.BehaviorSubject([]);
    }
    TournamentService.prototype.fetch = function () {
        var _this = this;
        return this.http.get(API_URL)
            .map(function (response) { return response.json(); })
            .subscribe(function (tournaments) { return _this.tournaments$.next(tournaments); });
    };
    TournamentService.prototype.get = function (id) {
        var obs$ = this.http.get(API_URL + "/" + id)
            .share()
            .map(function (response) { return response.json(); });
        obs$.subscribe(function (tournament) { });
        return obs$;
    };
    TournamentService.prototype.save = function (tournament) {
        if (!!tournament.id) {
            return this._update(tournament);
        }
        else {
            return this._create(tournament);
        }
    };
    TournamentService.prototype._create = function (tournament) {
        var _this = this;
        var obs$ = this.http.post(API_URL, tournament)
            .share()
            .map(function (response) { return response.json(); });
        obs$.subscribe(function (tournament) {
            var newTournaments = _this.tournaments$.getValue()
                .concat(tournament);
            _this.tournaments$.next(newTournaments);
        });
        return obs$;
    };
    TournamentService.prototype._update = function (tournament) {
        var _this = this;
        var obs$ = this.http.put(API_URL + "/" + tournament.id, tournament)
            .share()
            .map(function (response) { return response.json(); });
        obs$.subscribe(function (tournament) {
            var newTournaments = _this.tournaments$.getValue()
                .map(function (x) { return x.id === tournament.id ? tournament : x; });
            _this.tournaments$.next(newTournaments);
        });
        return obs$;
    };
    return TournamentService;
}());
TournamentService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], TournamentService);
exports.TournamentService = TournamentService;
//# sourceMappingURL=tournament.service.js.map