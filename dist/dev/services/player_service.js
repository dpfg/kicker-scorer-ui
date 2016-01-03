var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var http_1 = require('angular2/http');
require('rxjs/add/operator/map');
var player_1 = require('../models/player');
var api_config_1 = require('./api_config');
var PlayerService = (function () {
    function PlayerService(http) {
        this.http = http;
    }
    PlayerService.prototype.getAllPlayers = function () {
        return this.http.get(api_config_1.Config.baseURI + '/communities/TCCC/players')
            .map(function (res) {
            return res.json()['players'].map(function (pl) { return new player_1.Player(pl.username); });
        });
    };
    PlayerService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], PlayerService);
    return PlayerService;
})();
exports.PlayerService = PlayerService;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL3BsYXllcl9zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbIlBsYXllclNlcnZpY2UiLCJQbGF5ZXJTZXJ2aWNlLmNvbnN0cnVjdG9yIiwiUGxheWVyU2VydmljZS5nZXRBbGxQbGF5ZXJzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxxQkFBeUIsZUFBZSxDQUFDLENBQUE7QUFDekMscUJBQTZCLGVBQWUsQ0FBQyxDQUFBO0FBRTdDLFFBQU8sdUJBQXVCLENBQUMsQ0FBQTtBQUUvQix1QkFBcUIsa0JBQWtCLENBQUMsQ0FBQTtBQUN4QywyQkFBcUIsY0FBYyxDQUFDLENBQUE7QUFFcEM7SUFHRUEsdUJBQW9CQSxJQUFVQTtRQUFWQyxTQUFJQSxHQUFKQSxJQUFJQSxDQUFNQTtJQUU5QkEsQ0FBQ0E7SUFFTUQscUNBQWFBLEdBQXBCQTtRQUNFRSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxHQUFHQSxDQUFDQSxtQkFBTUEsQ0FBQ0EsT0FBT0EsR0FBR0EsMkJBQTJCQSxDQUFDQTthQUMvREEsR0FBR0EsQ0FBRUEsVUFBQ0EsR0FBYUE7WUFDbEJBLE1BQU1BLENBQUNBLEdBQUdBLENBQUNBLElBQUlBLEVBQUVBLENBQUNBLFNBQVNBLENBQUNBLENBQUNBLEdBQUdBLENBQUNBLFVBQUFBLEVBQUVBLElBQUlBLE9BQUFBLElBQUlBLGVBQU1BLENBQUNBLEVBQUVBLENBQUNBLFFBQVFBLENBQUNBLEVBQXZCQSxDQUF1QkEsQ0FBQ0EsQ0FBQ0E7UUFDbEVBLENBQUNBLENBQUNBLENBQUNBO0lBQ1BBLENBQUNBO0lBWkhGO1FBQUNBLGlCQUFVQSxFQUFFQTs7c0JBY1pBO0lBQURBLG9CQUFDQTtBQUFEQSxDQWRBLEFBY0NBLElBQUE7QUFiWSxxQkFBYSxnQkFhekIsQ0FBQSIsImZpbGUiOiJzZXJ2aWNlcy9wbGF5ZXJfc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge0h0dHAsIFJlc3BvbnNlfSBmcm9tICdhbmd1bGFyMi9odHRwJztcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcyc7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCc7XG5cbmltcG9ydCB7UGxheWVyfSBmcm9tICcuLi9tb2RlbHMvcGxheWVyJztcbmltcG9ydCB7Q29uZmlnfSBmcm9tICcuL2FwaV9jb25maWcnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUGxheWVyU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwKSB7XG5cbiAgfVxuXG4gIHB1YmxpYyBnZXRBbGxQbGF5ZXJzKCk6IE9ic2VydmFibGU8QXJyYXk8UGxheWVyPj4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KENvbmZpZy5iYXNlVVJJICsgJy9jb21tdW5pdGllcy9UQ0NDL3BsYXllcnMnKVxuICAgICAgLm1hcCggKHJlczogUmVzcG9uc2UpID0+IHtcbiAgICAgICAgcmV0dXJuIHJlcy5qc29uKClbJ3BsYXllcnMnXS5tYXAocGwgPT4gbmV3IFBsYXllcihwbC51c2VybmFtZSkpO1xuICAgICAgfSk7XG4gIH1cblxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9