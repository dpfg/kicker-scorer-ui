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
var game_1 = require('../models/game');
var api_config_1 = require('./api_config');
var MatchService = (function () {
    function MatchService(http, opts) {
        this.http = http;
        this.opts = opts;
        console.log(opts.headers);
    }
    MatchService.prototype.createMatch = function (blue_team, red_team) {
        if (blue_team == null || red_team == null) {
            console.error("empty team");
        }
        var requestURI = api_config_1.Config.baseURI + '/communities/TCCC/matches';
        return this.http.post(requestURI, JSON.stringify({
            "players": [{
                    "goalkeeper": blue_team.goalkeeper.username,
                    "forward": blue_team.forward.username
                }, {
                    "goalkeeper": blue_team.goalkeeper.username,
                    "forward": blue_team.forward.username
                }]
        }))
            .map(function (res) { return res.json(); })
            .map(function (json) { console.log(json); if (json)
            return game_1.Match.fromJSON(json);
        else
            return null; });
    };
    MatchService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, http_1.RequestOptions])
    ], MatchService);
    return MatchService;
})();
exports.MatchService = MatchService;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL21hdGNoX3NlcnZpY2UudHMiXSwibmFtZXMiOlsiTWF0Y2hTZXJ2aWNlIiwiTWF0Y2hTZXJ2aWNlLmNvbnN0cnVjdG9yIiwiTWF0Y2hTZXJ2aWNlLmNyZWF0ZU1hdGNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxxQkFBeUIsZUFBZSxDQUFDLENBQUE7QUFDekMscUJBQXNELGVBQWUsQ0FBQyxDQUFBO0FBRXRFLFFBQU8sdUJBQXVCLENBQUMsQ0FBQTtBQUUvQixxQkFBa0MsZ0JBQWdCLENBQUMsQ0FBQTtBQUNuRCwyQkFBcUIsY0FBYyxDQUFDLENBQUE7QUFFcEM7SUFHSUEsc0JBQW9CQSxJQUFVQSxFQUFVQSxJQUFvQkE7UUFBeENDLFNBQUlBLEdBQUpBLElBQUlBLENBQU1BO1FBQVVBLFNBQUlBLEdBQUpBLElBQUlBLENBQWdCQTtRQUN4REEsT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsQ0FBQ0E7SUFDOUJBLENBQUNBO0lBRU1ELGtDQUFXQSxHQUFsQkEsVUFBbUJBLFNBQWVBLEVBQUVBLFFBQWNBO1FBQzlDRSxFQUFFQSxDQUFDQSxDQUFDQSxTQUFTQSxJQUFJQSxJQUFJQSxJQUFJQSxRQUFRQSxJQUFJQSxJQUFJQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUN4Q0EsT0FBT0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsWUFBWUEsQ0FBQ0EsQ0FBQ0E7UUFDaENBLENBQUNBO1FBRURBLElBQUlBLFVBQVVBLEdBQUdBLG1CQUFNQSxDQUFDQSxPQUFPQSxHQUFHQSwyQkFBMkJBLENBQUNBO1FBRTlEQSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxVQUFVQSxFQUFFQSxJQUFJQSxDQUFDQSxTQUFTQSxDQUM1Q0E7WUFDSUEsU0FBU0EsRUFBRUEsQ0FBQ0E7b0JBQ1JBLFlBQVlBLEVBQUVBLFNBQVNBLENBQUNBLFVBQVVBLENBQUNBLFFBQVFBO29CQUMzQ0EsU0FBU0EsRUFBRUEsU0FBU0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsUUFBUUE7aUJBQ3hDQSxFQUFFQTtvQkFDS0EsWUFBWUEsRUFBRUEsU0FBU0EsQ0FBQ0EsVUFBVUEsQ0FBQ0EsUUFBUUE7b0JBQzNDQSxTQUFTQSxFQUFFQSxTQUFTQSxDQUFDQSxPQUFPQSxDQUFDQSxRQUFRQTtpQkFDeENBLENBQUNBO1NBQ1RBLENBQUNBLENBQ0xBO2FBQ0lBLEdBQUdBLENBQUNBLFVBQUNBLEdBQWFBLElBQU9BLE1BQU1BLENBQUNBLEdBQUdBLENBQUNBLElBQUlBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO2FBQzlDQSxHQUFHQSxDQUFDQSxVQUFDQSxJQUFZQSxJQUFPQSxPQUFPQSxDQUFDQSxHQUFHQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQSxDQUFDQSxFQUFFQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQTtZQUFDQSxNQUFNQSxDQUFDQSxZQUFLQSxDQUFDQSxRQUFRQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtRQUFDQSxJQUFJQTtZQUFDQSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtJQUNoSEEsQ0FBQ0E7SUEzQkxGO1FBQUNBLGlCQUFVQSxFQUFFQTs7cUJBK0NaQTtJQUFEQSxtQkFBQ0E7QUFBREEsQ0EvQ0EsQUErQ0NBLElBQUE7QUE5Q1ksb0JBQVksZUE4Q3hCLENBQUEiLCJmaWxlIjoic2VydmljZXMvbWF0Y2hfc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge0h0dHAsIFJlc3BvbnNlLCBIZWFkZXJzLCBSZXF1ZXN0T3B0aW9uc30gZnJvbSAnYW5ndWxhcjIvaHR0cCc7XG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMnO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xuXG5pbXBvcnQge1BsYXllciwgVGVhbSwgTWF0Y2h9IGZyb20gJy4uL21vZGVscy9nYW1lJztcbmltcG9ydCB7Q29uZmlnfSBmcm9tICcuL2FwaV9jb25maWcnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTWF0Y2hTZXJ2aWNlIHtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCwgcHJpdmF0ZSBvcHRzOiBSZXF1ZXN0T3B0aW9ucykge1xuICAgICAgICBjb25zb2xlLmxvZyhvcHRzLmhlYWRlcnMpO1xuICAgIH1cblxuICAgIHB1YmxpYyBjcmVhdGVNYXRjaChibHVlX3RlYW06IFRlYW0sIHJlZF90ZWFtOiBUZWFtKTogT2JzZXJ2YWJsZTxNYXRjaD4ge1xuICAgICAgICBpZiAoYmx1ZV90ZWFtID09IG51bGwgfHwgcmVkX3RlYW0gPT0gbnVsbCkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcImVtcHR5IHRlYW1cIik7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgcmVxdWVzdFVSSSA9IENvbmZpZy5iYXNlVVJJICsgJy9jb21tdW5pdGllcy9UQ0NDL21hdGNoZXMnO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdChyZXF1ZXN0VVJJLCBKU09OLnN0cmluZ2lmeShcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInBsYXllcnNcIjogW3tcbiAgICAgICAgICAgICAgICAgICAgXCJnb2Fsa2VlcGVyXCI6IGJsdWVfdGVhbS5nb2Fsa2VlcGVyLnVzZXJuYW1lLFxuICAgICAgICAgICAgICAgICAgICBcImZvcndhcmRcIjogYmx1ZV90ZWFtLmZvcndhcmQudXNlcm5hbWVcbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcImdvYWxrZWVwZXJcIjogYmx1ZV90ZWFtLmdvYWxrZWVwZXIudXNlcm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImZvcndhcmRcIjogYmx1ZV90ZWFtLmZvcndhcmQudXNlcm5hbWVcbiAgICAgICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgICAgICAgIC5tYXAoKHJlczogUmVzcG9uc2UpID0+IHsgcmV0dXJuIHJlcy5qc29uKCk7IH0pXG4gICAgICAgICAgICAubWFwKChqc29uOiBPYmplY3QpID0+IHsgY29uc29sZS5sb2coanNvbik7IGlmIChqc29uKSByZXR1cm4gTWF0Y2guZnJvbUpTT04oanNvbik7IGVsc2UgcmV0dXJuIG51bGw7IH0pO1xuICAgIH1cbiAgICAvL1xuICAgIC8vIHB1YmxpYyBmaW5kVGVhbShnb2Fsa2VlcGVyOiBQbGF5ZXIsIGZvcndhcmQ6IFBsYXllcik6IE9ic2VydmFibGU8QXJyYXk8VGVhbT4+IHtcbiAgICAvLyAgIHZhciByZXF1ZXN0VVJJID0gQ29uZmlnLmJhc2VVUkkgKyAnL2NvbW11bml0aWVzL1RDQ0NDL3RlYW1zL3NlYXJjaD8nO1xuICAgIC8vICAgaWYoZ29hbGtlZXBlciAhPSBudWxsKSB7XG4gICAgLy8gICAgIHJlcXVlc3RVUkkgKz0gXCJnb2Fsa2VlcGVyPVwiICsgZ29hbGtlZXBlci51c2VybmFtZSArIFwiJlwiO1xuICAgIC8vICAgfVxuICAgIC8vXG4gICAgLy8gICBpZihmb3J3YXJkICE9IG51bGwpIHtcbiAgICAvLyAgICAgcmVxdWVzdFVSSSArPSBcImZvcndhcmQ9XCIgKyBmb3J3YXJkLnVzZXJuYW1lO1xuICAgIC8vICAgfVxuICAgIC8vXG4gICAgLy8gICByZXR1cm4gdGhpcy5odHRwLmdldChyZXF1ZXN0VVJJKVxuICAgIC8vICAgICAvLyAubWFwKCk7XG4gICAgLy8gICAvLyByZXR1cm4gdGhpcy5odHRwLmdldChDb25maWcuYmFzZVVSSSArICcvY29tbXVuaXRpZXMvVENDQy9wbGF5ZXJzJylcbiAgICAvLyAgIC8vICAgLm1hcCggKHJlczogUmVzcG9uc2UpID0+IHtcbiAgICAvLyAgIC8vICAgICByZXR1cm4gcmVzLmpzb24oKVsncGxheWVycyddLm1hcChwbCA9PiBuZXcgUGxheWVyKHBsLnVzZXJuYW1lKSk7XG4gICAgLy8gICAvLyAgIH0pO1xuICAgIC8vIH1cblxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9