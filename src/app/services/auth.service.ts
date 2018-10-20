import {Injectable, OnDestroy, Output} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/catch';



@Injectable() // This is for let some service injectable in other service
export class AuthService implements OnDestroy {

  isLogin: boolean;

  constructor(private router: Router, private httpClient: HttpClient) {
  }

  // Sign-up method
  signUpUser(email: string, password: string) {
  }

  // Login method
  loginUser(email: string, password: string) {

    // email and password purple key read from postman
    const data = {email: email, password: password};
    return this.httpClient.post('http://185.69.54.21/back_end/web/site/login', data)
      // .catch((err, caught) => {
      //   console.log(err);
      //   console.log(caught);
      //   const ob = new Observable((observer) => {
      //     observer.next(123);
      //   });
      //   return ob;
      //   return Observable.throw(err);
      // })
      ;
  }

  isUserLogin(input) {
    return this.isLogin = input;
  }

  logOutUser() {
    localStorage.removeItem('token');
    this.isUserLogin(false);
  }

  public getToken(): string {
    return localStorage.getItem('token');
  }

  checkTokenValidation() {

    const token = this.getToken();
    console.log(token);
    return this.httpClient.get('http://185.69.54.21/back_end/web/site/check-token');
  }

  // checkTokenValidation() {
  //
  //   const token = this.getToken();
  //   console.log(token);
  //   return this.httpClient.get('http://185.69.54.21/back_end/web/site/check-token', {
  //     headers: new HttpHeaders().append('Authorization', `Bearer ${token}`)
  //   });
  // }

  public isAuthenticated() {
    return false;
  }

  ngOnDestroy() {

  }


}
