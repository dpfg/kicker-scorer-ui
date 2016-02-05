import {Component, OnChanges} from 'angular2/core';
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
import {LoadingProgressComponent} from './loader';

import {MenuComponent} from '../menu/menu';

import {checkAuth} from "../../services/auth";
import {LoaderService} from "../../services/loader";

export class RouteErrorHandler {
  public static router;
}

@Component({
  selector: 'app',
  templateUrl: './components/app/app.html',
  styleUrls: ['./components/app/app.css'],
  directives: [MenuComponent, ROUTER_DIRECTIVES, LoadingProgressComponent]
})
@RouteConfig([
  { path: '/',                as: 'Home',           redirectTo: ['/GetStarted']},
  { path: '/login',           as: 'Login',          component: LoginComponent},
  { path: '/get-started',     as: 'GetStarted',     component: GetStartedComponent },
  { path: '/new-match',       as: 'NewGame',        component: NewGameComponent },
  { path: '/match/:id',       as: 'GameDetails',    component: GameDetailsComponent },
  { path: '/matches',         as: 'MatchList',      component: MatchListComponent },
  { path: '/about', component: AboutCmp, as: 'About' }
])
export class AppCmp {
  constructor(router: Router, private _loader: LoaderService) {
    RouteErrorHandler.router = router;
  }

  public isAuthenticated() {
    return checkAuth();
  }

  public isLoading(): boolean {
    return this._loader.isActive();
  }
}
