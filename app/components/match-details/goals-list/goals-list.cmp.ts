import {Component, View, Input} from 'angular2/core';

import {Match, Team, MatchGoal} from '../../../models/game';
import {MatchService} from '../../../services/match_service';

@Component({
  selector: 'goals-list'
})
@View({
  templateUrl: './components/match-details/goals-list/goals-list.tmpl.html',
  styleUrls: ['./components/match-details/goals-list/goals-list.css']
})
export class GoalsListCmp {
  @Input() match: Match;

  constructor(private matchService: MatchService) {

  }

  getPlayerName(goal: MatchGoal): string {
    let player = this.match.getPlayer(goal.team_id, goal.player_id);
    if (player) {
      return player.username;
    }
    return '';
  }

  getGoalsDesc(): Array<MatchGoal> {
    return this.match.goals.sort( (n1, n2) => n1.created.getTime() > n2.created.getTime() ? -1 : 1 );
  }

  delete(goal: MatchGoal) {
    this.matchService.deleteGoal(goal).subscribe(() => this.popGoal(goal));
  }

  popGoal(goal: MatchGoal) {
    this.match.goals = this.match.goals.filter( g => g.id !== goal.id);
  }
}
