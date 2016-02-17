import {provide, Injectable} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from 'angular2/router';
import {HTTP_PROVIDERS, XHRBackend, BaseRequestOptions} from 'angular2/http';
import {AuthHttp, AuthConfig} from './shared/utils/jwt';

import {AppCmp} from './app/components/app';

import {MatchService} from './shared/services/match';
import {PlayerService} from './shared/services/player';
import {AuthService} from './shared/services/auth';
import {LoaderService} from './shared/services/loader';

import {RequestOptions} from 'angular2/http';
import {CustomHttp} from './shared/utils/http';

let APP_SERVICES = [
    MatchService,
    PlayerService,
    AuthService,
    LoaderService
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
    AuthHttp,
    provide(CustomHttp,  {
      useFactory: (backend, defaultOptions, loader) => new CustomHttp(backend, defaultOptions, loader),
      deps: [XHRBackend, RequestOptions, LoaderService]
    }),
]);


// In order to start the Service Worker located at "./sw.js"
// uncomment this line. More about Service Workers here
// https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers
// if ('serviceWorker' in navigator) {
//   (<any>navigator).serviceWorker.register('sw.js').then(function(registration) {
//     console.log('ServiceWorker registration successful with scope: ', registration.scope);
//   }).catch(function(err) {
//     console.log('ServiceWorker registration failed: ', err);
//   });
// }
