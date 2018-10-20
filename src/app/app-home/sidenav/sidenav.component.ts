import {Component, ElementRef, HostListener, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {SidenavService} from '../../services/sidenav.service';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {

  private navSize: string;
  // @ViewChild('sidenav') public sidenav: MatSidenavModule;

  @ViewChild('mybackSidenav') mybackSidenav: ElementRef;
  @ViewChild('main') main: ElementRef;

  // @HostListener('sidenav') click(eventdata: Event) {
  //   this.navSize = document.getElementById('sidenav').style.width;
  //
  //   if (this.navSize === '140') {
  //     closeSidenav();
  //   }
  //   openSidenav();
  // }

  constructor(private sidenavService: SidenavService, public authService: AuthService,
              private router: Router) {
  }

  ngOnInit() {
  }


  onLogoutSubmit() {
    this.authService.logOutUser();
    this.router.navigate(['/']);
  }

  openSidenav() {

    this.navSize = document.getElementById('sidenav').style.width;
    if (this.navSize === '140') {
      document.getElementById('mybackSidenav').style.width = '0';

    } else {
      document.getElementById('mybackSidenav').style.width = '140px';
    }
    // document.getElementById('mybackSidenav').style.width = '140px';
    // document.getElementById('main').style.marginRight = '250px';
    console.log(this.navSize);
  }

  closeSidenav() {
    document.getElementById('mybackSidenav').style.width = '0';
    // document.getElementById('main').style.marginRight = '0';
    console.log(this.main);
  }
}
