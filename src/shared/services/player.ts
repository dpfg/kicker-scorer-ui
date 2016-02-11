import {Injectable} from 'angular2/core';
import {Response} from 'angular2/http';
import {AuthHttp} from  '../utils/jwt';

import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';

import {Player} from '../models/player';
import {Config} from './api_config';

@Injectable()
export class PlayerService {

  constructor(private http: AuthHttp) {

  }

  public getAllPlayers(): Observable<Array<Player>> {
    return this.http.get(Config.baseURI + '/communities/TCCC/players')
      .map( (res: Response) => {
        return res.json()['players'].map( (pl:any) => new Player(Number(pl.id), pl.username));
      });
  }

}
