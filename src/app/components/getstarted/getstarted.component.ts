import {Component} from 'angular2/angular2';
import {Router} from 'angular2/router';

@Component({
  selector: "kicker-scorer",
  templateUrl: 'app/components/getstarted/getstarted.template.html'
})
export class GetStartedComponent {
  constructor(private router: Router) {

  }

  navigateToNewGame() {
    this.router.navigate(['/NewGame']);
  }
}
