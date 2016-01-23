import {provide, Injectable} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from 'angular2/router';
import {HTTP_PROVIDERS, BaseRequestOptions} from 'angular2/http';
import {AuthHttp, AuthConfig} from './utils/jwt';


import {AppCmp} from './components/app/app';

import {MatchService} from './services/match';
import {PlayerService} from './services/player';
import {AuthService} from './services/auth';
import {RequestOptions} from "angular2/http";

let APP_SERVICES = [
    MatchService,
    PlayerService,
    AuthService
];

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
              noJwtError: true
          });
        }
      }),
    AuthHttp
]);
