import {Component, AfterViewInit} from 'angular2/angular2';
import {Location, Route} from 'angular2/router';


@Component({
  selector: "help",
  templateUrl: "app/components/help/help.html"
})
export class HelpComponent {
  constructor(private location: Location) {
  }

  getThisViewPath() {
    return this.location.path();
  }
}
