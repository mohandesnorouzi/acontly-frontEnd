import {Injectable} from '@angular/core';

@Injectable()
export class AppGlobals {
  httpRequestURL = 'http://185.69.54.21/back_end/web/';
  isAuthenticated: boolean;
  checksubTitleSideNav: boolean; // True means not null and false means null
  checkMainSideNav: boolean; // True means not null and false means null
}
