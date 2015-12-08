import {bootstrap, provide} from 'angular2/angular2';
import { ROUTER_PROVIDERS, APP_BASE_HREF, LocationStrategy, HashLocationStrategy } from 'angular2/router';

import { KickerScorerComponent} from './kicker-scorer';


bootstrap(KickerScorerComponent, [
  ROUTER_PROVIDERS,
  provide(LocationStrategy, {useClass: HashLocationStrategy }),
  provide(APP_BASE_HREF, {useValue: '/'})
]);
