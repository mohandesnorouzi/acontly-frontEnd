import {Component, Input, OnInit, Output} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../services/auth.service';
import {AppGlobals} from '../services/app-globals.service';
import {ModalComponent} from '../modal/modal.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public router: Router, public authService: AuthService,
              public appGlobal: AppGlobals) {
  }

  ngOnInit() {
  }

  onLogoutSubmit() {
    this.authService.logOutUser();
    this.router.navigate(['/']);
  }

}
