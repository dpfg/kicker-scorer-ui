import {Component, View} from 'angular2/core';
import {RouteParams, Router, CanActivate} from 'angular2/router';

import {Match, Team, Player} from '../../models/game';
import {MatchService} from '../../services/match';

import {TeamScoreCmp} from './team-score/team-score';
import {GoalsListCmp} from './goals-list/goals-list';
import {MatchTimerCmp} from './match-timer';
import {checkAuthAndRedirect} from "../../services/auth";

@Component({
    selector: 'game-details'
})
@View({
    templateUrl: './components/match-details/match-details.html',
    styleUrls: ['./components/match-details/match-details.css'],
    directives: [TeamScoreCmp, GoalsListCmp, MatchTimerCmp]
})
@CanActivate(() => checkAuthAndRedirect())
export class GameDetailsComponent {
    public match:Match = null;// new Match(-1, null, null, new Date());

    constructor(
        private prms:RouteParams,
        private router:Router,
        private matchService:MatchService) {

        matchService.get(Number(this.prms.get('id'))).subscribe(m => this.match = m);
    }

    getTeamScore(team:Team) {
        return this.match.goals.filter(g => g.team_id === team.id).length;
    }

    addGoal(team:Team, player:Player) {
        if (this.isScoreComplete() || this.match.completed) {
            return;
        }
        this.matchService.addGoal(this.match, team, player).subscribe((g) => this.match.goals.push(g));
    }

    isScoreComplete():boolean {
        return this.getTeamScore(this.match.blue_team) >= 10 || this.getTeamScore(this.match.red_team) >= 10;
    }

    finishMatch() {
        this.router.navigate(['Home']);
    }
}
