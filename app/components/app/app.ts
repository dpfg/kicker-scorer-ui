import {Component, ViewEncapsulation} from 'angular2/core';
import {
  RouteConfig,
  ROUTER_DIRECTIVES
} from 'angular2/router';

import {HomeCmp} from '../home/home';
import {AboutCmp} from '../about/about';
import {GetStartedComponent} from '../getstarted/getstarted';
import {NewGameComponent} from '../new-game/new_game';

import {MenuCmp} from '../menu/menu.cmp';

@Component({
  selector: 'app',
  templateUrl: './components/app/app.html',
  styleUrls: ['./components/app/app.css'],
  directives: [MenuCmp, ROUTER_DIRECTIVES]
})
@RouteConfig([
  { path: '/',                as: 'Home',           component: HomeCmp},
  { path: '/get-started',     as: 'GetStarted',     component: GetStartedComponent },
  { path: '/new-game',        as: 'NewGame',        component: NewGameComponent },
  { path: '/about', component: AboutCmp, as: 'About' }
])
export class AppCmp {}
