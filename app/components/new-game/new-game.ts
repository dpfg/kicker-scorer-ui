import {Component, View} from 'angular2/core';
import {Router, CanActivate} from 'angular2/router';

import {Team, Match} from '../../models/game';

import {PlayerSelectorComponent} from '../player-selector/player_selector';
import {MatchService} from '../../services/match';
import {checkAuthAndRedirect} from "../../services/auth";

@Component({
  selector: 'new-game'
})
@View({
  templateUrl: './components/new-game/new-game.html',
  styleUrls: ['./components/new-game/new-game.css'],
  directives: [PlayerSelectorComponent]
})
@CanActivate(() => checkAuthAndRedirect())
export class NewGameComponent {
  blue_team: Team;
  red_team: Team;

  private toSelectTeam: Team;
  private toSelectPlayer: number;

  private errors: Array<string> = [];

  constructor(private matchService: MatchService, private router: Router) {
    this.blue_team = new Team();
    this.red_team = new Team();
  }

  private validateRequiredTeamSetup(): boolean {
    if (!(this.blue_team && this.red_team)) {
      return false;
    }
    if(!this.blue_team.isComplete() || !this.red_team.isComplete()) {
      return false;
    }
    return true;
  }

  private validateTeamSetup() {
    this.errors = [];
    if (this.red_team.equal(this.blue_team)) {
      this.errors.push('You cannot select the same players for different teams.');
      return false;
    }

    if (this.red_team.hasPlayers(this.blue_team.goalkeeper, this.blue_team.forward)) {
      this.errors.push('You cannot select the same players for different teams.');
      return false;
    }
    return true;
  }

  private getUserPicPlaceholder() {
    return 'https://placeholdit.imgix.net/~text?txtsize=33&txt=350×150&w=40&h=40';
  }

  private select(team: Team, pl: number) {
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
    if (!this.validateTeamSetup()) {
      return;
    }
    this.matchService
      .createMatch(this.blue_team, this.red_team)
      .subscribe((match: Match) => this.router.navigate(['/GameDetails', { 'id': match.id }]), this.onError);
  }

  private onError() {
    console.log('on error');
  }
}
