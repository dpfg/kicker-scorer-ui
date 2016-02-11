import {Component} from 'angular2/core';
import {CanActivate} from 'angular2/router';

import {checkAuthAndRedirect} from '../../shared/services/auth';

@Component({
    selector: 'home',
    templateUrl: './home/components/home.html',
    styleUrls: ['./home/components/home.css']
})
@CanActivate(() => checkAuthAndRedirect())
export class HomeComponent {

}
