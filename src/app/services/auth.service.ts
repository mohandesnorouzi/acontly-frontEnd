import {Injectable, OnDestroy, Output} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {AppGlobals} from './app-globals.service';


@Injectable() // This is for let some service injectable in other service
export class AuthService implements OnDestroy {

  constructor(private router: Router, private httpClient: HttpClient,
              private appGlobal: AppGlobals) {
  }

  // Sign-up method
  signUpUser(email: string, password: string) {
  }

  // Login method
  loginUser(email: string, password: string) {
    // email and password purple key read from postman
    const data = {email: email, password: password};
    return this.httpClient.post(this.appGlobal.httpRequestURL + 'site/login', data);
  }


  logOutUser() {
    localStorage.removeItem('token');
    this.router.navigate(['/']);
    // this.appGlobal.isAuthenticated = false;
    // console.log(this.appGlobal.isAuthenticated);
  }

  public getToken(): string {
    return localStorage.getItem('token');
  }

  checkTokenValidation() {
    return this.httpClient.get('http://185.69.54.21/back_end/web/site/check-token');
  }

  ngOnDestroy() {
  }

}



