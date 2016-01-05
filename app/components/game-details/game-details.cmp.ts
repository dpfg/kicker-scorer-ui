import {Component, View} from 'angular2/core';
import {RouteParams} from 'angular2/router';

import {Match, Team} from '../../models/game';
import {MatchService} from '../../services/match_service';

import {TeamScoreCmp} from './team-score/team-score.cmp';
import {GoalsListCmp} from './goals-list/goals-list.cmp';

@Component({
  selector: 'game-details'
})
@View({
  templateUrl: './components/game-details/game-details.tmpl.html',
  styleUrls: ['./components/game-details/game-details.css'],
  directives: [TeamScoreCmp, GoalsListCmp]
})
export class GameDetailsComponent {
  private match: Match = new Match(-1, null, null, new Date());

  constructor(private prms: RouteParams, private matchService: MatchService) {
    console.log(prms.get('id'));

    matchService.get(Number(prms.get('id'))).subscribe(m => this.match = m);
  }

  getTeamScore(team: Team) {
    return this.match.goals.filter( g => g.team_id == team.id).length
  }

  addGoal(team: Team) {
    this.matchService.addGoal(this.match, team).subscribe((m) => this.match = m);
  }
}
