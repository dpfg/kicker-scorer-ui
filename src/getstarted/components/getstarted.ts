import {Component} from 'angular2/core';
import {Router, CanActivate} from 'angular2/router';
import {checkAuthAndRedirect} from '../../shared/services/auth';


@Component({
  selector: 'get-started',
  templateUrl: './getstarted/components/getstarted.html'
})
@CanActivate(() => checkAuthAndRedirect())
export class GetStartedComponent  {
  constructor(private router: Router) {

  }

  navigateToNewGame() {
    this.router.navigate(['/NewGame']);
  }
}
