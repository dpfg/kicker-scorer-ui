import {Component} from 'angular2/core';
import {
    RouteConfig,
    ROUTER_DIRECTIVES,
    Router
} from 'angular2/router';

import {HomeComponent} from '../home/home';
import {AboutCmp} from '../about/about';
import {GetStartedComponent} from '../getstarted/getstarted';
import {NewGameComponent} from '../new-game/new-game';
import {GameDetailsComponent} from '../match-details/match-details';
import {MatchListComponent} from '../match-list/match-list';
import {LoginComponent} from '../login/login';

import {MenuComponent} from '../menu/menu';

import {checkAuth} from "../../services/auth";

export class RouteErrorHandler {
  public static router;
}

@Component({
  selector: 'app',
  templateUrl: './components/app/app.html',
  styleUrls: ['./components/app/app.css'],
  directives: [MenuComponent, ROUTER_DIRECTIVES]
})
@RouteConfig([
  { path: '/',                as: 'Home',           component: HomeComponent},
  { path: '/login',           as: 'Login',          component: LoginComponent},
  { path: '/get-started',     as: 'GetStarted',     component: GetStartedComponent },
  { path: '/new-match',       as: 'NewGame',        component: NewGameComponent },
  { path: '/match/:id',       as: 'GameDetails',    component: GameDetailsComponent },
  { path: '/matches',         as: 'MatchList',      component: MatchListComponent },
  { path: '/about', component: AboutCmp, as: 'About' }
])
export class AppCmp {
  constructor(router: Router) {
    RouteErrorHandler.router = router;
  }

  isAuthenticated() {
    return checkAuth();
  }
}
