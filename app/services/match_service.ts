import {Injectable} from 'angular2/core';
import {Http, Response, Headers, RequestOptions} from 'angular2/http';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';

import {Player, Team, Match} from '../models/game';
import {Config} from './api_config';

@Injectable()
export class MatchService {

    constructor(private http: Http, private opts: RequestOptions) {
        console.log(opts.headers);
    }

    public createMatch(blue_team: Team, red_team: Team): Observable<Match> {
        if (blue_team == null || red_team == null) {
            console.error("empty team");
        }

        var requestURI = Config.baseURI + '/communities/TCCC/matches';

        return this.http.post(requestURI, JSON.stringify(
            {
                "players": [{
                    "goalkeeper": blue_team.goalkeeper.username,
                    "forward": blue_team.forward.username
                }, {
                        "goalkeeper": blue_team.goalkeeper.username,
                        "forward": blue_team.forward.username
                    }]
            })
        )
            .map((res: Response) => { return res.json(); })
            .map((json: Object) => { console.log(json); if (json) return Match.fromJSON(json); else return null; });
    }
    //
    // public findTeam(goalkeeper: Player, forward: Player): Observable<Array<Team>> {
    //   var requestURI = Config.baseURI + '/communities/TCCCC/teams/search?';
    //   if(goalkeeper != null) {
    //     requestURI += "goalkeeper=" + goalkeeper.username + "&";
    //   }
    //
    //   if(forward != null) {
    //     requestURI += "forward=" + forward.username;
    //   }
    //
    //   return this.http.get(requestURI)
    //     // .map();
    //   // return this.http.get(Config.baseURI + '/communities/TCCC/players')
    //   //   .map( (res: Response) => {
    //   //     return res.json()['players'].map(pl => new Player(pl.username));
    //   //   });
    // }

}
