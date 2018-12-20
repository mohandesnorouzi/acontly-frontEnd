import {EventEmitter, Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';


@Injectable()
export class AppGlobals {
  httpRequestURL = 'http://185.69.54.21/back_end/web/';
  isAuthenticated: boolean;
  checksubTitleSideNav: boolean; // True means not null and false means null
  checkMainSideNav: boolean; // True means not null and false means null
  // currentURL: string;
  activeBlur: boolean;
  activeAccountName: string;
  activeAccountMedium: string;
  activeSocial: string;

  activeElements = new EventEmitter<string>();
  // public currentURL: BehaviorSubject<string> = new BehaviorSubject<string>('null');
  // currentURL$ = this.currentURL.asObservable();
  activeBox = new EventEmitter<boolean>();

  // public updateProperties(val) {
  //   this.currentURL.next(val);
  // }

}
