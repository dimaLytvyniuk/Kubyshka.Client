import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';
import { RestUrlBuilder } from './rest-url-builder';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

declare let require: any;

@Injectable()
export class AuthService {
  private readonly apiServiceUrl: string;
  private decode = require('jwt-decode');

  constructor(private http: HttpClient,
    private restUrlBuilder: RestUrlBuilder,
    private router: Router) {
    this.apiServiceUrl = environment['ApiServiceUrl'];
  }

  signIn(credentials) {
    return this.http.post(this.restUrlBuilder.build(this.apiServiceUrl, "api", "auth", "sign-in"), credentials);
  }

  signUp(credentials) {
    return this.http.post(this.restUrlBuilder.build(this.apiServiceUrl, "api", "auth", "sign-up"), credentials);
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['']);
  }

  get isAuthentificated() {
    return !!localStorage.getItem('token');
  }

  get username() {
    if (!this.isAuthentificated)
      return "NO_TOKEN";

    var decoded = this.decode(localStorage.getItem('token'));
    var tokenMap = new Map(Object.entries(decoded));
    return tokenMap.get("user").toString();
  }

}
