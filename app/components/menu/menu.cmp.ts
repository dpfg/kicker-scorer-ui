import {Component} from 'angular2/core';

import {ROUTER_DIRECTIVES, CanActivate} from 'angular2/router';
import {checkAuthAndRedirect} from "../../services/auth-service";

@Component({
  selector : 'menu',
  templateUrl: './components/menu/menu.tmpl.html',
  directives: [ROUTER_DIRECTIVES]
})
export class MenuCmp {

}
