
import {Player} from './player';

export class Team {
  public id: number;
  public name: string;
  public goalkeeper: Player;
  public forward: Player;

  static fromJSON(json: any): Team {
    let team = new Team();
    team.id = json.id;
    team.name = json.name;
    team.goalkeeper = json.goalkeeper;
    team.forward = json.forward;
    return team;
  }

  isComplete() {
    return this.goalkeeper !== null && this.forward !== null;
  }

  isPersisted() {
    return this.id !== null;
  }


}
