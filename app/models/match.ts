import {Team} from './team';

export class Match {
  id: number;
  blue_team: Team;
  red_team: Team;

  blue_team_score: number;
  red_team_score: number;


  static fromJSON(data: any): Match {
    console.log('fromJSON');
    return new Match();
  }

}
