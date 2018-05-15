import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHeaders } from '@angular/common/http';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor() { }

    intercept(req, next) {
        var token = localStorage.getItem('token');

        var authRequest = req.clone({
            headers: req.headers.set('Authentication', `${token}`)
        })

        return next.handle(authRequest);
    }
}