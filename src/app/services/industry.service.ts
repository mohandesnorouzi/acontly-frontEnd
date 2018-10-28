import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {AppGlobals} from './app-globals.service';

@Injectable() // This is for let some service injectable in other service
export class IndustryService {

  constructor(private router: Router, private httpClient: HttpClient, private appGlobal: AppGlobals) {
  }

  // get company size
  getAllIndustry() {
    return this.httpClient.get(this.appGlobal.httpRequestURL + 'site/industry');
  }
}
