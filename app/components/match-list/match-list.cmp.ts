import {Component, View} from 'angular2/core';
import {Router} from 'angular2/router';

import {MatchService} from '../../services/match_service';

import {Match} from '../../models/game';

@Component({
  selector: 'match-list'
})
@View({
  templateUrl: './components/match-list/match-list.tmpl.html',
  styleUrls: ['./components/match-list/match-list.css']
})
export class MatchListCmp {
  matchList: Array<Match>;

  constructor(private matchService: MatchService, private router: Router) {
    matchService.getAll().subscribe( ml => this.matchList = ml );
  }

  navigateTo(match: Match) {
    this.router.navigate(['/GameDetails', { 'id': match.id }]);
  }
}
