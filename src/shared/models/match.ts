import {Team} from './team';
import {Player} from './player';

export class Match {
  public goals:Array<MatchGoal>;

  constructor(public id:number,
              public blue_team:Team,
              public red_team:Team,
              public date:Date,
              public completed:boolean) {

    blue_team.setBlueTeam();
    red_team.setRedTeam();
  }

  static fromJSON(data:any):Match {
    let match = new Match(
      data.id,
      Team.fromJSON(data.teams[0]),
      Team.fromJSON(data.teams[1]),
      new Date(data.date),
      data.completed
    );
    if (data.goals) {
      match.goals = data.goals.map((g:any) => {
        let goal = new MatchGoal();
        goal.match = match;
        goal.team = match.getTeam(g.team_id);
        goal.player = match.getPlayer(g.team_id, g.player_id);
        goal.created = new Date(g.created);
        return goal;
      });
    }
    return match;
  }

  getTeamScore(team:Team) {
    return this.goals.filter(g => g.team.id === team.id).length;
  }

  getTeam(team_id:number):Team {
    if (this.red_team.id === team_id) {
      return this.red_team;
    } else if (this.blue_team.id === team_id) {
      return this.blue_team;
    }
    return null;
  }

  getPlayer(team_id:number, player_id:number):Player {
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
  public id:number;
  public match:Match;
  public team:Team;
  public player:Player;
  public created:Date;

  static fromJSON(match: Match, json:any):MatchGoal {
    let goal = new MatchGoal();
    goal.id = json.id;
    goal.match = match;
    goal.team = match.getTeam(json.team_id);
    goal.player = match.getPlayer(json.team_id, json.player_id);
    goal.created = new Date(json.created);
    return goal;
  }

  public isPersonal(): boolean {
    return this.player !== null;
  }

  public isNotPersonal(): boolean {
    return !this.isPersonal();
  }
}
