import {Injectable} from 'angular2/core';
import {Router} from 'angular2/router';
import {Http, Response} from 'angular2/http';
import {Config} from './api_config';
import {JwtHelper, tokenNotExpired} from '../utils/jwt';
import {RouteErrorHandler} from '../../app/components/app';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class AuthService {
  private jwtHelper;

  constructor(private http: Http, private router: Router) {
    this.jwtHelper = new JwtHelper();
  }

  authenticate(username, password) {
    let ob = this.http.post(Config.authURI, JSON.stringify({ username: username, password: password }));
    return Observable.create(observer => {
      ob.subscribe(
        (res: Response) => {
          let token = res.json().access_token;
          localStorage.setItem('access_token', token);
          observer.next();
        },
        (e) => observer.error(e.json())
      );
    });
  }

  isAuthenticated() {
    var token = localStorage.getItem('access_token');
    if (!token) {
      return false;
    }

    return token && !this.jwtHelper.isTokenExpired(token);
  }

  logout() {
    localStorage.removeItem('access_token');
    this.router.navigate(['/Login']);
  }
}

export function checkAuth() {
  return tokenNotExpired('access_token');
}

export function checkAuthAndRedirect(): Promise<boolean> {
  if (checkAuth()) {
    return new Promise((resolve, reject) => resolve(true));
  } else {
    return new Promise((resolve, reject) => {
      RouteErrorHandler.router.navigate(['/Login']);
      resolve(false);
    });
  }
}
