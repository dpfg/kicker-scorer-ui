import {Component, View} from 'angular2/core';
import {RouteParams, Router} from 'angular2/router';

import {Match, Team, Player} from '../../models/game';
import {MatchService} from '../../services/match_service';

import {TeamScoreCmp} from './team-score/team-score.cmp';
import {GoalsListCmp} from './goals-list/goals-list.cmp';
import {MatchTimerCmp} from './match-timer.cmp';

@Component({
  selector: 'game-details'
})
@View({
  templateUrl: './components/match-details/match-details.tmpl.html',
  styleUrls: ['./components/match-details/match-details.css'],
  directives: [TeamScoreCmp, GoalsListCmp, MatchTimerCmp]
})
export class GameDetailsComponent {
  public match: Match = null;// new Match(-1, null, null, new Date());

  constructor(private prms: RouteParams, private router: Router, private matchService: MatchService) {
    matchService.get(Number(prms.get('id'))).subscribe(m => this.match = m );
  }

  getTeamScore(team: Team) {
    return this.match.goals.filter( g => g.team_id === team.id).length;
  }

  addGoal(team: Team, player: Player) {
    if (this.isScoreComplete() || this.match.completed) {
      return;
    }
    this.matchService.addGoal(this.match, team, player).subscribe((g) => this.match.goals.push(g));
  }

  isScoreComplete(): boolean {
    return this.getTeamScore(this.match.blue_team) >= 10 || this.getTeamScore(this.match.red_team) >= 10;
  }

  finishMatch() {
    this.router.navigate(['Home']);
  }
}
