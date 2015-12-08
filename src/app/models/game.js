"use strict";
var Player = (function () {
    function Player(username) {
        this.username = username;
    }
    return Player;
})();
exports.Player = Player;
var Team = (function () {
    function Team() {
    }
    Team.prototype.isComplete = function () {
        return this.goalkeeper != null && this.forward != null;
    };
    Team.prototype.isPersisted = function () {
        return this.id != null;
    };
    return Team;
})();
exports.Team = Team;
//# sourceMappingURL=game.js.map