import {Component} from 'angular2/core';

import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
  selector : 'menu',
  templateUrl: './components/menu/menu.tmpl.html',
  directives: [ROUTER_DIRECTIVES]
})
export class MenuCmp {
  constructor() {

  }

}
