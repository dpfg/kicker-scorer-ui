import {Component} from 'angular2/core';
import {Router} from 'angular2/router';

@Component({
  selector: 'get-started',
  templateUrl: './components/getstarted/getstarted.html'
})
export class GetStartedComponent {
  constructor(private router: Router) {

  }

  navigateToNewGame() {
    this.router.navigate(['/NewGame']);
  }
}
