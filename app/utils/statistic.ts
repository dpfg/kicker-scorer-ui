//

import {Match} from '../models/match';
import {Player} from '../models/player';
import {Team} from '../models/team';


export module MatchStatistic {

  export interface TeamResult {
    team: Team;
    score: number;
  }

  export interface PlayerResult {
    player: Player;
    score: number;
  }

  /**
   * Return the list of goals per player.
   */
  export function getPersonalGoals(match:Match):Array<PlayerResult> {
    let personalGoals: any = match.goals
      .filter(goal => goal.isPersonal())
      .map(goal => ({player: goal.player, score: 1}))
      .reduce((acc, item) => {
        let id = item.player.id;
        acc[id] ? acc[id].score += item.score : acc[id] = item;
        return acc;
      }, {});
      return _.values(personalGoals).sort((a,b) => a.score > b.score ? -1 : 1);
  }

  export function getTeamGoals(match:Match):Array<TeamResult> {
    let personalGoals: any = match.goals
      .filter(goal => goal.isNotPersonal())
      .map(goal => ({team: goal.team, score: 1}))
      .reduce((acc, item) => {
        let id = item.team.id;
        acc[id] ? acc[id].score += item.score : acc[id] = item;
        return acc;
      }, {});
      return _.values(personalGoals).sort((a,b) => a.score > b.score ? -1 : 1);
  }



}
