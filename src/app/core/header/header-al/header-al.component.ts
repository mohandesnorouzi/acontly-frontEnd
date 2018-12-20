import {Component, HostListener, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../../../services/auth.service';
import {AppGlobals} from '../../../services/app-globals.service';

@Component({
  selector: 'app-header-al',
  templateUrl: './header-al.component.html',
  styleUrls: ['./header-al.component.scss']
})
export class HeaderALComponent implements OnInit {

  routURL: string;
  @HostListener('onActiveSocial')
  registerInstagramSocials: boolean;
  registerTelegramSocials: boolean;
  registerLinkedinSocials: boolean;
  registerTwitterSocials: boolean;


  constructor(public router: Router, public authService: AuthService, public appGlobal: AppGlobals
    , private activeRout: ActivatedRoute) {
    this.registerInstagramSocials = true;
    this.registerTelegramSocials = true;
    this.registerLinkedinSocials = true;
    this.registerTwitterSocials = true;

    this.appGlobal.activeAccountMedium = localStorage.getItem('activeAccountMedium');
    console.log(localStorage.getItem('activeAccountMedium'));
  }

  ngOnInit() {
    this.appGlobal.activeSocial = localStorage.getItem('activeAccountMedium');
  }

  onLogoutSubmit() {
    this.authService.logOutUser();
    this.router.navigate(['/']);
  }

  onActiveSocial(social) {
    localStorage.setItem('activeAccountMedium', social);
    this.appGlobal.activeSocial = social;
    this.routURL = 'home/' + social + '/overview';
    console.log(this.routURL);
    this.router.navigate([this.routURL]);
  }
}
