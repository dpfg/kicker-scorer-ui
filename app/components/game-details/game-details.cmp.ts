import {Component, View} from 'angular2/core';
import {RouteParams} from 'angular2/router';

import {Match, Team} from '../../models/game';
import {MatchService} from '../../services/match_service';

@Component({
  selector: 'game-details'
})
@View({
  templateUrl: './components/game-details/game-details.tmpl.html'
})
export class GameDetailsComponent {
  private match: Match = new Match(-1, null, null, -1, -1);

  constructor(private prms: RouteParams, private matchService: MatchService) {
    console.log(prms.get('id'));

    matchService.get(Number(prms.get('id'))).subscribe(m => this.match = m);
  }

  addGoal(team: Team) {
    this.matchService.addGoal(this.match, team).subscribe(() => console.log('tracked'));
  }
}
