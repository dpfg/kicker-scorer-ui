/// <reference path="../../../typings/browser/ambient/lodash/lodash.d.ts" />

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
  export function getPersonalGoals(match: Match): PlayerResult[] {
    return _(match.goals)
      .filter(goal => goal.isPersonal())
      .groupBy(goal => goal.player.id)
      .map((values: PlayerResult[]) => ({ player: _.first(values).player, score: values.length }))
      .value()
      .sort((a, b) => a.score > b.score ? -1 : 1);
  }

  export function getTeamGoals(match: Match): Array<TeamResult> {
    return _(match.goals)
      .filter(goal => goal.isNotPersonal())
      .groupBy(goal => goal.team.id)
      .map((values: TeamResult[]) => ({ team: _.first(values).team, score: values.length }))
      .value()
      .sort((a, b) => a.score > b.score ? -1 : 1);
  }



}
