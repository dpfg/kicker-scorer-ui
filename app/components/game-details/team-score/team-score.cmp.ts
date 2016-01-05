import {Component, View, Input, Output, EventEmitter} from 'angular2/core';

import {Team} from '../../../models/game';
import {MatchService} from '../../../services/match_service';

@Component({
  selector: 'team-score'
})
@View({
  templateUrl: './components/game-details/team-score/team-score.tmpl.html',
  styleUrls: ['./components/game-details/team-score/team-score.css']
})
export class TeamScoreCmp {
  @Input() team: Team;
  @Input() score: number;
  @Output() goal = new EventEmitter();

  constructor(private matchService: MatchService) {

  }

  onGoal() {
    this.goal.next(this.team);
  }

}
