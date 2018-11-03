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

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss', '../content/instagram/instagram.component.scss']
})
export class SidenavComponent implements OnInit {

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

    document.getElementById('openSideNav').style.width = '200px';
    document.getElementById('closeSideNav').style.width = '0';
    document.getElementById('subTitleSideNav').style.width = '0';

    const boxProperty = document.getElementById('boxPosition');
    if (boxProperty !== null) {
      document.getElementById('boxPosition').style.marginRight = '240px';
    }

  }

  Close() {

    document.getElementById('openSideNav').style.width = '0';
    document.getElementById('subTitleSideNav').style.width = '0';
    document.getElementById('closeSideNav').style.width = '60px';

    const boxProperty = document.getElementById('boxPosition');
    if (boxProperty !== null) {
      document.getElementById('boxPosition').style.marginRight = '100px';
    }
  }

  overviewSideNav() {
    const navProperty = document.getElementById('subTitleSideNav');
    const navWidth = window.getComputedStyle(navProperty, null).getPropertyValue('width');
    const boxProperty = document.getElementById('boxPosition');

    if (navWidth !== '0px') {
      document.getElementById('subTitleSideNav').style.width = '0';
    }
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
      document.getElementById('subTitleSideNav').style.width = '140px';
      this.titleID = id;


      if (boxProperty !== null) {
        document.getElementById('boxPosition').style.marginRight = '240px';
      }

    } else {
      // Close
      this.appGlobal.checksubTitleSideNav = false;
      document.getElementById('subTitleSideNav').style.width = '0';

      if (boxProperty !== null && openNavWidth === '0px') {
        document.getElementById('boxPosition').style.marginRight = '100px';
      }
    }
  }
}


