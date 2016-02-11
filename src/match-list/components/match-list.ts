import {Component, View} from 'angular2/core';
import {Router, CanActivate} from 'angular2/router';

import {MatchService} from '../../shared/services/match';

import {Match} from '../../shared/models/game';
import {checkAuthAndRedirect} from '../../shared/services/auth';

@Component({
  selector: 'match-list'
})
@View({
  templateUrl: './match-list/components/match-list.html',
  styleUrls: ['./match-list/components/match-list.css']
})
@CanActivate(() => checkAuthAndRedirect())
export class MatchListComponent {
  matchList: Array<Match>;

  constructor(private matchService: MatchService, private router: Router) {
    this.matchService.getAll().subscribe(ml => this.matchList = ml);
  }

  navigateTo(match: Match) {
    this.router.navigate(['/GameDetails', { 'id': match.id }]);
  }

  delete(match: Match) {
    //
  }
}
