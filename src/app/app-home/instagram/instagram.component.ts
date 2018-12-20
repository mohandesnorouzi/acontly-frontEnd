import {Component, OnInit} from '@angular/core';
import {AppGlobals} from '../../services/app-globals.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-instagram',
  templateUrl: './instagram.component.html',
})
export class InstagramComponent implements OnInit {

  constructor(private appGlobal: AppGlobals, private router: Router) {
    // console.log(this.router.url);
    if (this.router.url === '/home/instagram') {
      this.router.navigate(['home/instagram/overview']);
    }
  }

  ngOnInit() {
  }

}
