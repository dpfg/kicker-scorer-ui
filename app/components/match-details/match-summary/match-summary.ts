import {Component, View, OnInit, Input} from 'angular2/core';
import {RouteParams, Router} from 'angular2/router';

import {MatchService} from '../../../services/match';
import {Match} from '../../../models/game';

import {MatchStatistic} from '../../../utils/statistic';

@Component({
  selector: 'match-summary'
})
@View({
  templateUrl: './components/match-details/match-summary/match-summary.html',
  styleUrls: ['./components/match-details/match-summary/match-summary.css']
})
export class MatchSummaryComponent implements OnInit {
  @Input() match: Match;
  public personalGoals: Array<MatchStatistic.PlayerResult>;

  ngOnInit() {
    this.personalGoals = MatchStatistic.getPersonalGoals(this.match);
  }

}
