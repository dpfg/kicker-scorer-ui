import {Component, View, Input} from 'angular2/core';

import {Match, MatchGoal} from '../../shared/models/game';
import {MatchService} from '../../shared/services/match';

@Component({
  selector: 'goals-list'
})
@View({
  templateUrl: './match-details/components/goals-list.html',
  styleUrls: ['./match-details/components/goals-list.css']
})
export class GoalsListCmp {
  @Input() match: Match;

  constructor(private matchService: MatchService) {

  }

  getPlayerName(goal: MatchGoal): string {
    if (goal.player) {
      return goal.player.username;
    }
    return '';
  }

  getGoalsDesc(): Array<MatchGoal> {
    return this.match.goals.sort((n1, n2) => n1.created.getTime() > n2.created.getTime() ? -1 : 1);
  }

  delete(goal: MatchGoal) {
    this.matchService.deleteGoal(goal).subscribe(() => this.popGoal(goal));
  }

  popGoal(goal: MatchGoal) {
    this.match.goals = this.match.goals.filter(g => g.id !== goal.id);
  }
}
