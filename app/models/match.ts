import {Team} from './team';

export class Match {

  constructor(public id: number,
    public blue_team: Team,
    public red_team: Team,
    public blue_team_score: number,
    public red_team_score: number) {

  }

  static fromJSON(data: any): Match {
    console.log('fromJSON');

    return new Match(
                  data.id,
                  Team.fromJSON(data.teams[0]),
                  Team.fromJSON(data.teams[1]),
                  data.score[0],
                  data.score[1]
                );
  }

}
