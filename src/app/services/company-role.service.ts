import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Injectable() // This is for let some service injectable in other service
export class CompanyRoleService {

  constructor(private router: Router, private httpClient: HttpClient) {
  }

  // get company size
  getAllRoles() {
    return this.httpClient.get('http://185.69.54.21/back_end/web/site/roles');
  }
}