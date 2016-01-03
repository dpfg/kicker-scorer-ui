import {Injectable} from 'angular2/core';
import {Http, Response, RequestOptions} from 'angular2/http';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';

import {Team, Match} from '../models/game';
import {Config} from './api_config';

@Injectable()
export class MatchService {

  constructor(private http: Http) {

  }

  public createMatch(blue_team: Team, red_team: Team): Observable<Match> {
    if (blue_team === null || red_team === null) {
      console.error('empty team');
    }

    var requestURI = `${Config.baseURI}/communities/TCCC/matches`;

    let ob: Observable<Response> = this.http.post(requestURI, MatchAPIContract.create(blue_team, red_team));
    return ob.map((res: Response) => { return Match.fromJSON(res.json()); });
  }

  public get(id: number): Observable<Match> {
    let requestURI = `${Config.baseURI}/matches/${id}`;
    return this.http.get(requestURI).map((req: Response) => Match.fromJSON(req.json()));
  }

  public addGoal(match: Match, team: Team) {
    let requestURI = `${Config.baseURI}/matches/${match.id}/${team.id}/goal`;
    return this.http.post(requestURI, null);
  }

}

class MatchAPIContract {
  static create(blue_team: Team, red_team: Team): string {
    return JSON.stringify(
      {
        'teams': [this.createForTeam(blue_team), this.createForTeam(red_team)]
      });
  }

  private static createForTeam(team: Team): any {
    return { 'goalkeeper': team.goalkeeper.id, 'forward': team.forward.id };
  }
}