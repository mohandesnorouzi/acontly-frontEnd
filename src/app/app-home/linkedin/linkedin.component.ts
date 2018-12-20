import {Component, OnInit} from '@angular/core';
import {AppGlobals} from '../../services/app-globals.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-linkedin',
  templateUrl: './linkedin.component.html',
})
export class LinkedinComponent implements OnInit {

  constructor(private appGlobal: AppGlobals, private router: Router) {
    // console.log(this.router.url);
    if (this.router.url === '/home/linkedin') {
      this.router.navigate(['home/linkedin/overview']);
    }
  }

  ngOnInit() {
  }

}
