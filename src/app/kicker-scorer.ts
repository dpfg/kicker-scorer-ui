import {Component, bootstrap} from 'angular2/angular2';
import {Location, RouteConfig, RouterOutlet, RouterLink, Router} from 'angular2/router';

import {GetStartedComponent} from './components/getstarted/getstarted.component';
import {HelpComponent} from './components/help/help';
import {NewGameComponent} from './components/newgame/newgame.component';

@Component({
  selector: "kicker-scorer",
  templateUrl: 'app/kicker-scorer.template.html',
  directives: [RouterLink, RouterOutlet]
})
@RouteConfig([
  { path: '/',                redirectTo: '/get-started' },
  { path: '/get-started',     as: 'GetStarted',     component: GetStartedComponent },
  { path: '/help',            as: 'Help',           component: HelpComponent },
  { path: '/new-game',        as: 'NewGame',        component: NewGameComponent }
])
export class KickerScorerComponent {
  constructor(private location: Location, private router: Router) {

  }

  isRouteActive(path: string) {
    return this.location.path() == path;
  }

}
