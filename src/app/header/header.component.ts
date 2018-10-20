import {Component, Input, OnInit, Output} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  // public a: boolean;

  constructor(public router: Router, public authService: AuthService) {

    // this.a = authService.isAuthenticated();
    // console.log(this.a);
  }

  ngOnInit() {
  }

}
