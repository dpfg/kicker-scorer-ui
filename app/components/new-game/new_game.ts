import {Component, View} from 'angular2/core';
import {Router} from 'angular2/router';
import {Team, Match} from '../../models/game';

import {PlayerSelectorComponent} from '../player-selector/player_selector';
import {MatchService} from '../../services/match_service';

@Component({
  selector: 'new-game'
})
@View({
  templateUrl: './components/new-game/new_game.html',
  styleUrls: ['./components/new-game/style.css'],
  directives: [PlayerSelectorComponent]
})
export class NewGameComponent {
  blue_team: Team;
  red_team: Team;

  private toSelectTeam: Team;
  private toSelectPlayer: number;

  constructor(private matchService: MatchService, private router: Router) {
    this.blue_team = new Team();
    this.red_team = new Team();
  }

  private isValidTeamSetup() {
    return this.isTeamNotEmpty(this.blue_team) && this.isTeamNotEmpty(this.red_team);
  }


  private getUserPicPlaceholder() {
    return 'https://placeholdit.imgix.net/~text?txtsize=33&txt=350×150&w=40&h=40';
  }

  private select(team: Team, pl: number) {
    console.log('select: ' + team + ', pl: ' + pl);
    this.toSelectTeam = team;
    this.toSelectPlayer = pl;
  }

  private setPlayer(event) {
    if (this.toSelectPlayer === 0) {
      this.toSelectTeam.goalkeeper = event;
    } else {
      this.toSelectTeam.forward = event;
    }
    console.log(event);
  }

  private startMatch() {
    console.log('start match');
    this.matchService
      .createMatch(this.blue_team, this.red_team)
      .subscribe((match: Match) => this.router.navigate(['/GameDetails', { 'id': match.id }]), this.onError);
  }

  private onError() {
    console.log('on error');
  }

  private isTeamNotEmpty(team: Team) {
    return team !== null && team.isComplete();
  }
}
