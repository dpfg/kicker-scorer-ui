import {Component} from 'angular2/core';
import {CanActivate} from "angular2/router";
import {checkAuthAndRedirect} from "../../services/auth-service";

@Component({
    selector: 'home',
    templateUrl: './components/home/home.html',
    styleUrls: ['./components/home/home.css']
})
@CanActivate(() => checkAuthAndRedirect())
export class HomeCmp {

}
