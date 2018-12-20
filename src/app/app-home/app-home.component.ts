import {Component, OnInit, Renderer2} from '@angular/core';
import {SidenavService} from '../services/sidenav.service';
import {AppGlobals} from '../services/app-globals.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-app-home',
  templateUrl: './app-home.component.html',
  styleUrls: ['./app-home.component.scss']
})
export class AppHomeComponent implements OnInit {


  routURL: string;

  constructor(private sidenav: SidenavService, private renderer: Renderer2, public appGlobal: AppGlobals,
              private router: Router, private activeRout: ActivatedRoute) {
    this.renderer.setStyle(document.body, 'background-color', '#fdfdfd');

    // console.log(this.router.url);
    if (this.router.url === '/home') {
      this.routURL = localStorage.getItem('activeAccountMedium') + '/overview';
      this.router.navigate([this.routURL], {relativeTo: this.activeRout});
    } else {
      this.router.navigate([this.router.url]);
    }
    // console.log(localStorage.getItem('activeAccountMedium'));
    // this.routURL = localStorage.getItem('activeAccountMedium') + '/content-production';
    // console.log(this.routURL);
    // this.appGlobal.updateProperties('content-production');
    // this.router.navigate([this.routURL], {relativeTo: this.activeRout});
  }

  ngOnInit() {
  }

  toggleSidenav() {
    this.sidenav.toggle();
  }

}
