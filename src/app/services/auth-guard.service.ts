import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {AuthService} from './auth.service';
import {Injectable, Input} from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {AppGlobals} from './app-globals.service';


@Injectable()
export class LoggedInUserGuard implements CanActivate {


  constructor(private router: Router, private authService: AuthService,
              private appGlobal: AppGlobals) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    // const url: string = state.url;
    // console.log('Url:' + url);

    // console.log(this.authService.checkTokenValidation());
    const observable = new Observable<boolean>((observer) => {
      this.authService.checkTokenValidation().subscribe((data) => {
        if (!data['result']['status']) {
          this.appGlobal.isAuthenticated = false;
          observer.next(true);  // return true
        } else {
          this.appGlobal.isAuthenticated = true;
          observer.next(false);
          this.router.navigate(['/overview']);
        }
      });
    });
    return observable;
  }
}


@Injectable()
export class AuthGuard implements CanActivate {

  // @Input() isAuthenticated: boolean;

  constructor(private router: Router, private authService: AuthService,
              private appGlobal: AppGlobals) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    // const url: string = state.url;
    // console.log('Url:' + url);

    // console.log(this.authService.isAuthenticated());

    return this.authService.checkTokenValidation().pipe(
      map((data) => {
          if (!data['result']['status']) {
            this.router.navigate(['/']);
            this.appGlobal.isAuthenticated = false;
            return false;
          } else {
            this.appGlobal.isAuthenticated = true;
            return true;
          }
        }
      )
    );
  }
}
