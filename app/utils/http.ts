
import {Http, ConnectionBackend, RequestOptions, Request, Response, RequestOptionsArgs} from 'angular2/http';
import {Observable} from 'rxjs/Rx';

import {LoaderService} from '../services/loader';

export class CustomHttp extends Http {
  constructor(_backend: ConnectionBackend, _defaultOptions: RequestOptions, private _loader: LoaderService) {
    super(_backend, _defaultOptions);
  }

  request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
    this._loader.turnOn();
    let response: Observable<Response> = super.request(url, options);

    return Observable.create( observer => {
      response.subscribe(
        res => observer.next(res),
        ()   => observer.error(),
        ()  => this._loader.turnOff()
      );
    });
  }


}
