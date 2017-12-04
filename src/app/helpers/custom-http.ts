import { Injectable } from '@angular/core';
import { ConnectionBackend, XHRBackend, RequestOptions, Request, RequestOptionsArgs, Response, Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import { AppSettings } from '../app-settings';

@Injectable()
export class CustomHttp extends Http {
    constructor(backend: ConnectionBackend, defaultOptions: RequestOptions) {
        super(backend, defaultOptions);
    }

    get(url: string, options?: RequestOptionsArgs): Observable<Response> {
        return super.get(AppSettings.API_URL + url, this.addJwt(options)).catch(this.handleError);
    }

    post(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
        return super.post(AppSettings.API_URL + url, body, this.addJwt(options)).catch(this.handleError);
    }

    put(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
        return super.put(AppSettings.API_URL + url, body, this.addJwt(options)).catch(this.handleError);
    }

    delete(url: string, options?: RequestOptionsArgs): Observable<Response> {
        return super.delete(AppSettings.API_URL + url, this.addJwt(options)).catch(this.handleError);
    }

    // private helper methods
    private addJwt(options?: RequestOptionsArgs): RequestOptionsArgs {
        // ensure request options and headers are not null
        options = options || new RequestOptions();
        options.headers = options.headers || new Headers();

        // add authorization header with jwt token
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            options.headers.append('Authorization', 'Bearer ' + currentUser.token);
        }

        return options;
    }

    private handleError(error: any) {
        if (error.status === 401) {
            window.location.href = '/login';
        }

        return Observable.throw(error._body);
    }
}

export function customHttpFactory(xhrBackend: XHRBackend, requestOptions: RequestOptions): Http {
    return new CustomHttp(xhrBackend, requestOptions);
}

export let customHttpProvider = {
    provide: CustomHttp,
    useFactory: customHttpFactory,
    deps: [XHRBackend, RequestOptions]
};
