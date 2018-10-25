import {Component, ElementRef, HostListener, Input, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {SidenavService} from '../../services/sidenav.service';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {

  @ViewChild('closeSideNav') closeSideNav: ElementRef;
  @ViewChild('openSideNav') openSideNav: ElementRef;
  @ViewChild('subTitleSideNav') subTitleSideNav: ElementRef;
  @Input() titleID: string;

  @HostListener('mouseenter') mouseover(eventData: Event) {
  }

  constructor(private sidenavService: SidenavService, public authService: AuthService,
              private router: Router) {
  }

  ngOnInit() {
  }


  // Manage opening and closing of main part of sideNav
  Open() {

    document.getElementById('openSideNav').style.width = '200px';
    document.getElementById('closeSideNav').style.width = '0';
    document.getElementById('subTitleSideNav').style.width = '0';
  }

  Close() {
    // const navProperty = document.getElementById('openSideNav');
    // const navWidth = window.getComputedStyle(navProperty, null).getPropertyValue('width');
    //
    // const subTitleNavProperty = document.getElementById('subTitleSideNav');
    // const subTitleNavWidth = window.getComputedStyle(subTitleNavProperty, null).getPropertyValue('width');
    document.getElementById('openSideNav').style.width = '0';
    document.getElementById('subTitleSideNav').style.width = '0';
    document.getElementById('closeSideNav').style.width = '60px';
  }

  // SideNav(id) {
  //
  //   const navProperty = document.getElementById('subTitleSideNav');
  //   const navWidth = window.getComputedStyle(navProperty, null).getPropertyValue('width');
  //
  //   if (navWidth === '0px') {
  //     document.getElementById('subTitleSideNav').style.width = '140px';
  //     this.titleID = id;
  //   } else {
  //     document.getElementById('titleSideNav').style.width = '0';
  //   }
  // }

  subSideNav(id) {
    const navProperty = document.getElementById('subTitleSideNav');
    const navWidth = window.getComputedStyle(navProperty, null).getPropertyValue('width');

      if (navWidth === '0px') {
        document.getElementById('subTitleSideNav').style.width = '140px';
        this.titleID = id;
      } else {
        document.getElementById('subTitleSideNav').style.width = '0';
      }
    // document.getElementById('subTitleSideNav').style.width = '140px';
    // console.log(id);
    // this.titleID = id;
  }
}

