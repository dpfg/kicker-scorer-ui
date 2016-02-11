import {Component, View, OnInit, Input} from 'angular2/core';

import {Match} from '../../shared/models/game';
import {MatchStatistic} from '../../shared/utils/statistic';

@Component({
  selector: 'match-summary'
})
@View({
  templateUrl: './match-details/components/match-summary.html',
  styleUrls: ['./match-details/components/match-summary.css']
})
export class MatchSummaryComponent implements OnInit {
  @Input() match: Match;
  public personalGoals: Array<MatchStatistic.PlayerResult>;

  ngOnInit() {
    this.personalGoals = MatchStatistic.getPersonalGoals(this.match);
  }

}
