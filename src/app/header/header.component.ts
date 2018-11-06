import {Component, ElementRef, Input, OnInit, Output, ViewChild} from '@angular/core';
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

  activeInstagramSocials: boolean;
  activeTelegramSocials: boolean;
  activeLinkedinSocials: boolean;
  activeTwitterSocials: boolean;

  constructor(public router: Router, public authService: AuthService,
              public appGlobal: AppGlobals) {

    this.activeInstagramSocials = true;
    this.activeTelegramSocials = true;
    this.activeLinkedinSocials = true;
    this.activeTwitterSocials = true;
  }

  ngOnInit() {
  }

  onLogoutSubmit() {
    this.authService.logOutUser();
    this.router.navigate(['/']);
  }

}
