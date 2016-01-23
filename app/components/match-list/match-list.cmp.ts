import {Component, View} from 'angular2/core';
import {Router, CanActivate} from 'angular2/router';

import {MatchService} from '../../services/match_service';

import {Match} from '../../models/game';
import {AuthService, checkAuthAndRedirect} from "../../services/auth-service";

@Component({
  selector: 'match-list'
})
@View({
  templateUrl: './components/match-list/match-list.tmpl.html',
  styleUrls: ['./components/match-list/match-list.css']
})
@CanActivate(() => checkAuthAndRedirect())
export class MatchListCmp  {
  matchList: Array<Match>;

  constructor(private matchService: MatchService, private router: Router) {
    this.matchService.getAll().subscribe( ml => this.matchList = ml );
  }

  navigateTo(match: Match) {
    this.router.navigate(['/GameDetails', { 'id': match.id }]);
  }
}
