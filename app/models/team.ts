
import {Player} from './player';

export class Team {
  public id: number;
  public name: string;
  public goalkeeper: Player;
  public forward: Player;
  public color: string;

  public static RED_COLOR = 'red';
  public static BLUE_COLOR = 'blue';

  static fromJSON(json: any): Team {
    let team = new Team();
    team.id = json.id;
    team.name = json.name;
    team.goalkeeper = json.goalkeeper;
    team.forward = json.forward;
    return team;
  }

  isComplete(): boolean {
    if (this.goalkeeper && this.forward) {
      return true;
    }
    return false;
  }

  isPersisted() {
    return this.id !== null;
  }

  equal(team: Team):boolean {
    if (team.goalkeeper.id !== this.goalkeeper.id) {
      return false;
    }
    if (team.forward.id !== this.forward.id) {
      return false;
    }

    return true;
  }

  hasPlayers(...players: Player[]):boolean {
    return players.filter(p => p.id === this.goalkeeper.id || p.id === this.forward.id).length > 0;
  }

  public setRedTeam() {
    this.color = Team.RED_COLOR;
  }

  public setBlueTeam() {
    this.color = Team.BLUE_COLOR;
  }

  public isRedTeam(): boolean {
    return this.color === Team.RED_COLOR;
  }

  public isBlueTeam(): boolean {
    return this.color === Team.BLUE_COLOR;
  }

}
