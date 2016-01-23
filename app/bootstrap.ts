import {provide, Injectable} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from 'angular2/router';
import {HTTP_PROVIDERS, Headers, BaseRequestOptions} from 'angular2/http';
import {AuthHttp, AuthConfig} from 'angular2-jwt/angular2-jwt';


import {AppCmp} from './components/app/app';

import {MatchService} from './services/match_service';
import {PlayerService} from './services/player_service';
import {AuthService} from './services/auth-service';
import {RequestOptions} from "angular2/http";

let APP_SERVICES = [
    MatchService,
    PlayerService,
    AuthService
];

let headers = new Headers();
headers.append('Content-Type', 'application/json');

@Injectable()
export class JSONBaseRequest extends BaseRequestOptions {
    constructor() {
        super();
        this.headers.append('Content-Type', 'application/json');
    }
}

bootstrap(AppCmp, [
    ROUTER_PROVIDERS,
    HTTP_PROVIDERS,
    APP_SERVICES,
    provide(RequestOptions, { useClass: JSONBaseRequest }),
    provide(LocationStrategy, { useClass: HashLocationStrategy }),
    provide(AuthConfig, {
      useFactory: () => {
          return new AuthConfig({
              headerPrefix : 'JWT',
              tokenName: 'access_token',
              headers: headers,
              noJwtError: true
          });
        }
      }),
    AuthHttp
]);
