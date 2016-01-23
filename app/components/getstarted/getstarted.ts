import {Component} from 'angular2/core';
import {Router, CanActivate} from 'angular2/router';
import {checkAuthAndRedirect} from "../../services/auth-service";


@Component({
  selector: 'get-started',
  templateUrl: './components/getstarted/getstarted.html'
})
@CanActivate(() => checkAuthAndRedirect())
export class GetStartedComponent  {
  constructor(private router: Router) {

  }

  navigateToNewGame() {
    this.router.navigate(['/NewGame']);
  }
}
