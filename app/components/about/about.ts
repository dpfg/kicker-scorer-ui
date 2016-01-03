import {Component} from 'angular2/core';


@Component({
  selector: 'about',
  templateUrl: './components/about/about.html'
})
export class AboutCmp {
  constructor() {}
 /*
 * @param newname  any text as input.
 * @returns return false to prevent default form submit behavior to refresh the page.
 */
  addName(): boolean {
    return false;
  }
}
