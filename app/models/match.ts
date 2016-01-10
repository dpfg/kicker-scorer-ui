import {Team, Player} from './game';

export class Match {
  public goals: Array<MatchGoal>;

  constructor(public id: number,
    public blue_team: Team,
    public red_team: Team,
    public date: Date,
    public completed: boolean) {

  }

  static fromJSON(data: any): Match {
    let match = new Match(
                  data.id,
                  Team.fromJSON(data.teams[0]),
                  Team.fromJSON(data.teams[1]),
                  new Date(data.date),
                  data.completed
                );
    if(data.goals) {
      let goals = data.goals.map( g => MatchGoal.fromJSON(g));
      match.goals = goals;
    }
    console.log(match);
    return match;
  }

  getTeamScore(team: Team) {
    return this.goals.filter( g => g.team_id === team.id).length;
  }

  getTeam(team_id: number): Team {
    if(this.red_team.id === team_id) {
      return this.red_team;
    } else if(this.blue_team.id === team_id) {
      return this.blue_team;
    }
    return null;
  }

  getPlayer(team_id:number, player_id: number): Player {
    let team = this.getTeam(team_id);
    if (player_id === team.goalkeeper.id) {
      return team.goalkeeper;
    } else if (player_id === team.forward.id) {
      return team.forward;
    }

    return null;
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
