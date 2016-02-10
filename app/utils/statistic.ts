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
  export function getPersonalGoals(match: Match): Array<PlayerResult> {
    return _.chain(match.goals)
      .filter(goal => goal.isPersonal())
      .groupBy(goal => goal.player.id)
      .map(values => ({player: values[0].player, score: values.length}))
      .value()
      .sort((a, b) => a.score > b.score ? -1 : 1);
  }

  export function getTeamGoals(match: Match): Array<TeamResult> {
    return _.chain(match.goals)
      .filter(goal => goal.isNotPersonal())
      .groupBy(goal => goal.team.id)
      .map(values => ({team: values[0].team, score: values.length}))
      .value()
      .sort((a, b) => a.score > b.score ? -1 : 1);
  }



}
