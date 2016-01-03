import {Component, View, Input} from 'angular2/core';
import {Player, Team, Match} from '../../models/game';

import {PlayerSelectorComponent} from '../player-selector/player_selector';
import {MatchService} from '../../services/match_service';

@Component({
    selector: 'new-game'
})
@View({
    templateUrl: './components/new-game/new_game.html',
    styleUrls: ['./components/new-game/style.css'],
    directives: [PlayerSelectorComponent]
})
export class NewGameComponent {
    blue_team: Team;
    red_team: Team;

    private toSelectTeam: Team;
    private toSelectPlayer: number;

    constructor(private matchService: MatchService) {
        this.blue_team = new Team();
        this.red_team = new Team();
    }

    isValidTeamSetup() {
        return this.isTeamNotEmpty(this.blue_team) && this.isTeamNotEmpty(this.red_team)
    }

    private isTeamNotEmpty(team: Team) {
        return team != null && team.isComplete();
    }

    getUserPicPlaceholder() {
        return "https://placeholdit.imgix.net/~text?txtsize=33&txt=350×150&w=40&h=40";
    }

    select(team: Team, pl: number) {
        console.log('select: ' + team + ", pl: " + pl);
        this.toSelectTeam = team;
        this.toSelectPlayer = pl;
    }

    setPlayer(event) {
        if (this.toSelectPlayer == 0) {
            this.toSelectTeam.goalkeeper = event;
        } else {
            this.toSelectTeam.forward = event;
        }
        console.log(event);
    }

    startMatch() {
        console.log("start match");
        this.matchService
            .createMatch(this.blue_team, this.red_team)
            .subscribe(this.onMatchStarted, this.onError, this.onError);
    }

    onMatchStarted(d: Match) {
        console.log(d);
    }

    onError() {
        console.log("error");
    }
}
