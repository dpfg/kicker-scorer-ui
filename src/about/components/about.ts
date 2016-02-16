import {Component} from 'angular2/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/common';


@Component({
  selector: 'about',
  templateUrl: './about/components/about.html',
  directives: [FORM_DIRECTIVES, CORE_DIRECTIVES]
})
export class AboutCmp {
  newName: string;
  constructor() {}
}
