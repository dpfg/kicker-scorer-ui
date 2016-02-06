import {Component, View, OnInit} from 'angular2/core';
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
  public match:Match = null;
  public personalGoals = null;

  constructor(private prms:RouteParams,
              private router:Router,
              private matchService:MatchService) {

  }

  ngOnInit() {
    this.matchService.get(Number(this.prms.get('id'))).subscribe(m => {
      this.match = m;

      this.personalGoals = MatchStatistic.getPersonalGoals(this.match);
    });
  }

  public visible() {
    return this.match !== null;
  }
}
