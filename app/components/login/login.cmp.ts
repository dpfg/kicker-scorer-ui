import {Component, View} from 'angular2/core';
import {Router} from 'angular2/router';
import {AuthService} from '../../services/auth-service';

@Component({
    selector: 'login'
})
@View({
    templateUrl: './components/login/login.tmpl.html',
    styleUrls: ['./components/login/login.css']
})
export class LoginCmp {

    constructor(private loginService:AuthService, private router:Router) {
    }

    logIn(email, password) {
        this.loginService.authenticate(email, password).add(() => {
            this.router.navigate(['/Home']);
        });
    }
}
