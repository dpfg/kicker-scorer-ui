import {Component, View, Input, Output, EventEmitter} from 'angular2/core';

import {Team, Player} from '../../../models/game';
import {MatchService} from '../../../services/match';

@Component({
  selector: 'team-score'
})
@View({
  templateUrl: './components/match-details/team-score/team-score.html',
  styleUrls: ['./components/match-details/team-score/team-score.css']
})
export class TeamScoreCmp {
  @Input() team: Team;
  @Input() score: number;
  @Input() disabled: boolean;
  @Output() goal = new EventEmitter();

  constructor(private matchService: MatchService) {

  }

  onGoal(player?: Player) {
    this.goal.next({
      team : this.team,
      player : player
    });
  }

}
