import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  Input,
  OnInit,
  Output,
  Renderer2,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import {SidenavService} from '../../services/sidenav.service';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {InstagramComponent} from '../content/instagram/instagram.component';
import {AppGlobals} from '../../services/app-globals.service';
import {p} from '@angular/core/src/render3';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss', '../content/instagram/instagram.component.scss']
})
export class SidenavComponent implements OnInit {

  linkActive: string;
  iconActive: string;
  currentURL: string;
  contentCurrentPosition: string;

  @ViewChild('closeSideNav') closeSideNav: ElementRef;
  @ViewChild('openSideNav') openSideNav: ElementRef;
  @ViewChild('subTitleSideNav') subTitleSideNav: ElementRef;


  @Input() titleID: string;

  @HostListener('mouseenter') mouseover(eventData: Event) {
  }

  constructor(private sidenavService: SidenavService, public authService: AuthService,
              private router: Router, public instaComp: InstagramComponent,
              private renderer: Renderer2, private appGlobal: AppGlobals) {
  }

  ngOnInit() {
  }

  // Manage opening and closing of main part of sideNav
  Open() {

    this.appGlobal.checkMainSideNav = true;
    document.getElementById('openSideNav').style.width = '180px';
    document.getElementById('closeSideNav').style.width = '0';
    document.getElementById('subTitleSideNav').style.width = '0';

    const boxProperty = document.getElementById('boxPosition');
    if (boxProperty !== null) {
      // document.getElementById('boxPosition').style.marginRight = '248px';
      document.getElementById('boxPosition').style.marginRight = '204px';
    }

  }

  Close() {

    this.appGlobal.checkMainSideNav = false;
    this.appGlobal.checksubTitleSideNav = false;
    document.getElementById('openSideNav').style.width = '0';
    document.getElementById('subTitleSideNav').style.width = '0';
    document.getElementById('closeSideNav').style.width = '60px';

    const boxProperty = document.getElementById('boxPosition');
    if (boxProperty !== null) {
      // document.getElementById('boxPosition').style.marginRight = '108px';
      document.getElementById('boxPosition').style.marginRight = '104px';
    }
  }

  overviewSideNav() {
    const navProperty = document.getElementById('subTitleSideNav');
    const navWidth = window.getComputedStyle(navProperty, null).getPropertyValue('width');
    const boxProperty = document.getElementById('boxPosition');

    if (navWidth !== '0px') {
      document.getElementById('subTitleSideNav').style.width = '0';
    }
    // this.Open();
  }

  subSideNav(id) {

    const navProperty = document.getElementById('subTitleSideNav');
    const navWidth = window.getComputedStyle(navProperty, null).getPropertyValue('width');
    const openNavProperty = document.getElementById('openSideNav');
    const openNavWidth = window.getComputedStyle(openNavProperty, null).getPropertyValue('width');
    const boxProperty = document.getElementById('boxPosition');


    if (navWidth === '0px') {
      // Open
      this.appGlobal.checksubTitleSideNav = true;
      document.getElementById('subTitleSideNav').style.width = '120px';
      this.titleID = id;


      if (boxProperty !== null) {
        // document.getElementById('boxPosition').style.marginRight = '248px';
        document.getElementById('boxPosition').style.marginRight = '204px';
      }

    } else {
      // Close
      this.appGlobal.checksubTitleSideNav = false;
      document.getElementById('subTitleSideNav').style.width = '0';

      if (boxProperty !== null && openNavWidth === '0px') {
        // document.getElementById('boxPosition').style.marginRight = '108px';
        document.getElementById('boxPosition').style.marginRight = '104px';
      }
    }
  }

  clickIcon(value) {
    this.iconActive = value;
    this.linkActive = value;
    // console.log(this.linkActive);
  }

  contentClick(value) {
    if (!value) {
      this.linkActive = this.iconActive;
      this.router.navigate(['overview/content/production']);
      this.contentCurrentPosition = 'content-production';

    } else if (value === 'content-production') {
      this.linkActive = value;
      this.router.navigate(['overview/content/production']);
      this.contentCurrentPosition = 'content-production';

    } else if (value === 'all-content') {
      this.linkActive = value;
      this.router.navigate(['overview/content/all']);
      this.contentCurrentPosition = 'all-content';
    }

    // setTimeout(() => {
    //   this.currentURL = this.instaComp.getURL();
    //   // console.log(this.currentURL);
    // }, 1000);

    // console.log(this.linkActive);
  }


  overviewClick(value) {
    this.linkActive = value;
  }

  calendarClick(value) {
    this.linkActive = value;
  }

}


