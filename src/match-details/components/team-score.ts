import {Component, View, Input, Output, EventEmitter} from 'angular2/core';

import {Team, Player} from '../../shared/models/game';
import {MatchService} from '../../shared/services/match';

@Component({
  selector: 'team-score'
})
@View({
  templateUrl: './match-details/components/team-score.html',
  styleUrls: ['./match-details/components/team-score.css']
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
      team: this.team,
      player: player
    });
  }

}
