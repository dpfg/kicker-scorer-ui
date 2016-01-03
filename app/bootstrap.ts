import {provide, Injectable} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from 'angular2/router';
import {HTTP_PROVIDERS, RequestOptions, BaseRequestOptions} from 'angular2/http';

import {AppCmp} from './components/app/app';

import {MatchService} from './services/match_service';
import {PlayerService} from './services/player_service';

let APP_SERVICES = [
    MatchService,
    PlayerService
];


@Injectable()
export class JSONBaseRequest extends BaseRequestOptions {
    constructor() {
        super();
        this.headers.append("Content-Type", "application/json");
    }
}

bootstrap(AppCmp, [
    ROUTER_PROVIDERS,
    HTTP_PROVIDERS,
    APP_SERVICES,
    provide(RequestOptions, { useClass: JSONBaseRequest }),
    provide(LocationStrategy, { useClass: HashLocationStrategy })
]);
