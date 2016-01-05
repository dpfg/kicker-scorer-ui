import {Team} from './team';

export class Match {
  public goals: Array<MatchGoal>;

  constructor(public id: number,
    public blue_team: Team,
    public red_team: Team,
    public date: Date) {

  }

  static fromJSON(data: any): Match {
    let match = new Match(
                  data.id,
                  Team.fromJSON(data.teams[0]),
                  Team.fromJSON(data.teams[1]),
                  new Date(data.date)
                );
    if(data.goals) {
      let goals = data.goals.map( g => MatchGoal.fromJSON(g));
      match.goals = goals;
    }
    console.log(match);
    return match;
  }

}

export class MatchGoal {
  constructor(
    public id: number,
    public match_id: number,
    public team_id: number,
    public player_id: number,
    public created: Date
    ) {

  }

  static fromJSON(json:any): MatchGoal {
    return new MatchGoal(json.id, json.match_id, json.team_id, json.player_id, new Date(json.created));
  }
}
