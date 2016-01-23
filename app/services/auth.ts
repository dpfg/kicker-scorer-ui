import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Config} from './api-config';
import {JwtHelper, tokenNotExpired} from '../utils/jwt';
import {RouteErrorHandler} from "../components/app/app";

@Injectable()
export class AuthService {
    private jwtHelper;

    constructor(private http:Http) {
        this.jwtHelper = new JwtHelper();
    }

    authenticate(username, password) {
        let ob = this.http.post(Config.authURI, JSON.stringify({username: username, password: password}));
        return ob.subscribe(
            (res:Response) => {
                let token = res.json().access_token;
                localStorage.setItem('access_token', token);
            },
            () => console.error("authentication error")
        );
    }

    isAuthenticated() {
        var token = localStorage.getItem('access_token');
        if (!token) {
            return false;
        }

        return token && !this.jwtHelper.isTokenExpired(token);
    }
}

export function checkAuth() {
    return tokenNotExpired('access_token');
}

export function checkAuthAndRedirect():Promise<boolean> {
    if (checkAuth()) {
        return new Promise((resolve, reject) => resolve(true));
    } else {
        return new Promise((resolve, reject) => {
            RouteErrorHandler.router.navigate(['/Login']);
            resolve(false);
        })
    }
}
