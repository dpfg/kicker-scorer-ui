import {Component, View} from 'angular2/angular2';
import {Team, Player} from '../../models/game';

@Component({
  selector: 'new-game'
})
@View({
  templateUrl: 'app/components/newgame/newgame.template.html',
  styleUrls: ['app/components/newgame/style.css']
})
export class NewGameComponent {
  blue_team: Team;
  red_team: Team;

  constructor() {
    this.blue_team = new Team();
    this.blue_team.goalkeeper = new Player("Aliaksandr Ch.");
    this.blue_team.forward = new Player("Nickolay P.");

    this.red_team = new Team();
    this.red_team.goalkeeper = new Player("Aliaksandr Ch.");
    this.red_team.forward = new Player("Nickolay P.");
  }

  isValidTeamSetup() {
    return this.isTeamNotEmpty(this.blue_team) && this.isTeamNotEmpty(this.red_team)
  }

  private isTeamNotEmpty(team: Team) {
    return team != null && team.isComplete();
  }

  getUserPicPlaceholder(){
    return "https://placeholdit.imgix.net/~text?txtsize=33&txt=350×150&w=40&h=40";
  }
}
