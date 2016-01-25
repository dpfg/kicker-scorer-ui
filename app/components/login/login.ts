import {Component, View} from 'angular2/core';
import {Router} from 'angular2/router';
import {AuthService} from '../../services/auth';

@Component({
    selector: 'login'
})
@View({
    templateUrl: './components/login/login.html',
    styleUrls: ['./components/login/login.css']
})
export class LoginComponent {

    private error: string;

    constructor(private loginService:AuthService, private router:Router) {
      loginService.logout();
    }

    logIn(email, password) {
        this.loginService.authenticate(email, password).subscribe(
          () => this.router.navigate(['/GetStarted']),
          (e) => this.error = e.description
        );
    }


}
