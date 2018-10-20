import {Injectable} from '@angular/core';
import {HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse, HttpErrorResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthService} from './auth.service';
// import 'rxjs/add/operator/do';
// import 'rxjs/add/observable/throw';
import {Router} from '@angular/router';
import {catchError} from 'rxjs/operators';
import {throwError} from 'rxjs';


// This class attach every request we send to server include token and what anything we want in header
@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(public authService: AuthService, private router: Router) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${this.authService.getToken()}`
      }
    });

    return next.handle(request);

    // return next.handle(request).do((event: HttpEvent<any>) => {
    //   if (event instanceof HttpResponse) {
    //     // do stuff with response if you want
    //   }
    // }, (err: any) => {
    //   if (err instanceof HttpErrorResponse) {
    //     if (err.status === 403) {
    //       // redirect to the login route
    //       // or show a modal
    //       return this.logoutUser();
    //     }
    //   }
    // });

  }

}


@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(public authService: AuthService, private router: Router) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(catchError(err => {
      if (err.status === 403) {
        // auto logout if 401 response returned from api
        // this.authenticationService.logout();
        // const url = this.router;
        console.log(this.router.url);
        this.router.navigate(['/']);
        // location.reload(true);
      }
      const error = err.error.message || err.statusText;
      return throwError(error);
    }));
  }
}
