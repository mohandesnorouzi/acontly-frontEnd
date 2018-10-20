import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {AuthService} from './auth.service';
import {Injectable, OnDestroy} from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';


@Injectable()
export class LoggedInUserGuard implements CanActivate, OnDestroy {


  constructor(private router: Router, private authService: AuthService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    const url: string = state.url;
    // console.log('Url:' + url);

    // console.log(this.authService.checkTokenValidation());
    const observable = new Observable<boolean>((observer) => {
      this.authService.checkTokenValidation().subscribe((data) => {
        if (!data['result']['status']) {
          observer.next(true);  // return true
        } else {
          observer.next(false);
          console.log("not loged in, home");
          this.router.navigate(['/overview']);
        }
      });
    });
    // return this.authService.checkTokenValidation().pipe(
    //   map((data) => {
    //     console.log(data);
    //     if (data['result']['status']) {
    //       this.router.navigate(['/overview']);
    //       console.log('this is me');
    //       return false;
    //     } else {
    //       return true;
    //     }
    //   })
    // );
    return observable;
  }

  // console.log(this.authService.checkTokenValidation());
  // this.authService.checkTokenValidation().subscribe((data) => {
  //   console.log('Url:' + url);
  //   console.log(data);
  //   if (data['ok']) {
  //     this.router.navigate(['/overview']);
  //     console.log('this is me');
  //     return false;
  //   } else {
  //     return true;
  //   }
  // });

  // return false;

  // if (this.authService.isAuthenticated()) {
  //   this.router.navigate(['/overview']);
  //   // return this.authService.isAuthenticated();
  //   return false;
  // } else {
  //   return true;
  // }


  ngOnDestroy() {
  }
}


@Injectable()
export class AuthGuard implements CanActivate, OnDestroy {


  constructor(private router: Router, private authService: AuthService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    const url: string = state.url;
    console.log('Url:' + url);


    return this.authService.checkTokenValidation().pipe(
      map((data) => {
          console.log(data);
          if (!data['result']['status']) {
            this.router.navigate(['/']);
            return false;
          } else {
            return true;
          }
        }
      )
    );


    // return this.authService.checkTokenValidation().pipe(
    //   map((data) => {
    //       console.log(data);
    //       if (!data['ok']) {
    //         this.router.navigate(['/']);
    //         console.log('this is me');
    //         return false;
    //       } else {
    //         return true;
    //       }
    //     },
    //     // (error: string) => {
    //     //   console.log(error);
    //     // }
    //   )
    // );


    //   if (!this.authService.isAuthenticated()) {
    //     this.router.navigate(['/']);
    //     return false;
    //   }
    //   return true;


  }

  ngOnDestroy() {

  }
}
