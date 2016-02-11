import {Component} from 'angular2/core';
import {
    RouteConfig,
    ROUTER_DIRECTIVES,
    Router
} from 'angular2/router';

import {AboutCmp} from '../../about/components/about';
import {GetStartedComponent} from '../../getstarted/components/getstarted';
import {NewGameComponent} from '../../new-game/components/new-game';
import {GameDetailsComponent} from '../../match-details/components/match-details';
import {MatchListComponent} from '../../match-list/components/match-list';
import {LoginComponent} from '../../login/components/login';
import {MenuComponent} from '../../menu/components/menu';

import {checkAuth} from '../../shared/services/auth';
import {LoaderService} from '../../shared/services/loader';

export class RouteErrorHandler {
  public static router;
}

@Component({
  selector: 'app',
  templateUrl: './app/components/app.html',
  styleUrls: ['./app/components/app.css'],
  directives: [MenuComponent, ROUTER_DIRECTIVES]
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
