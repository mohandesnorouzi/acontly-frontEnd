import {Component, ElementRef, HostListener, Input, OnDestroy, OnInit, Renderer2, ViewChild} from '@angular/core';
import {SidenavService} from '../../services/sidenav.service';
import {ActivatedRoute, Router} from '@angular/router';
import {AppGlobals} from '../../services/app-globals.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit, OnDestroy {

  linkActive: string;
  iconActive: string;
  isOpen: string;
  contentCurrentPosition: string;
  routURL: string;
  x: Subscription;
  @ViewChild('closeSideNav') closeSideNav: ElementRef;
  @ViewChild('openSideNav') openSideNav: ElementRef;
  @ViewChild('subTitleSideNav') subTitleSideNav: ElementRef;
  @ViewChild('boxPosition') boxPosition: ElementRef;


  @Input() titleID: string;

  @HostListener('mouseenter') mouseover(eventData: Event) {
  }

  constructor(private sidenavService: SidenavService, private router: Router,
              private renderer: Renderer2, private appGlobal: AppGlobals, private activeRout: ActivatedRoute) {
    this.appGlobal.activeElements.subscribe((value: string) => {
      if (value === 'overview' || value === 'calendar') {
        this.overviewSideNav();
      }
      this.iconActive = value;
      this.linkActive = value;
    });

  }

  ngOnInit() {
    this.subTitleSideNav.nativeElement.style.width = '0';
  }

  // Manage opening and closing of main part of sideNav
  Open() {
    this.isOpen = 'open';
    this.appGlobal.checkMainSideNav = true;
    this.openSideNav.nativeElement.style.width = '180px';
    this.closeSideNav.nativeElement.style.width = '0';
    this.subTitleSideNav.nativeElement.style.width = '0';
    this.appGlobal.activeBox.emit(true);
  }

  Close() {
    this.appGlobal.checkMainSideNav = false;
    this.appGlobal.checksubTitleSideNav = false;
    this.openSideNav.nativeElement.style.width = '0';
    this.closeSideNav.nativeElement.style.width = '60px';
    this.subTitleSideNav.nativeElement.style.width = '0';
    this.appGlobal.activeBox.emit(false);
  }

  overviewSideNav() {
    if (this.subTitleSideNav.nativeElement.style.width !== '0px') {
      this.subTitleSideNav.nativeElement.style.width = '0';
    }
  }

  subSideNav(id) {

    if (this.subTitleSideNav.nativeElement.style.width === '0px') {
      // Open
      this.appGlobal.checksubTitleSideNav = true;
      this.subTitleSideNav.nativeElement.style.width = '120px';
      this.titleID = id;

      this.appGlobal.activeBox.emit(true);

    } else {
      // Close
      this.appGlobal.checksubTitleSideNav = false;
      this.subTitleSideNav.nativeElement.style.width = '0';
      this.appGlobal.activeBox.emit(false);
    }
  }

  // Change color of element when mouse hover
  onHover(id1, id2) {
    document.getElementById(id1).style.color = '#56ecdb';
    document.getElementById(id2).style.color = '#56ecdb';
  }

  // Change color of element when mouse hover out
  onHoverOut(id1, id2) {
    document.getElementById(id1).style.color = '#6b289b';
    document.getElementById(id2).style.color = '#6b289b';
  }

  contentClick(value) {
    if (!value) {
      this.iconActive = 'content-production';
      this.linkActive = 'content-production';
      this.routURL = localStorage.getItem('activeAccountMedium') + '/content-production';
      this.router.navigate([this.routURL], {relativeTo: this.activeRout});
      this.contentCurrentPosition = 'content-production';

    } else if (value === 'content-production') {
      this.iconActive = value;
      this.linkActive = value;
      this.routURL = localStorage.getItem('activeAccountMedium') + '/content-production';
      this.router.navigate([this.routURL], {relativeTo: this.activeRout});
      this.contentCurrentPosition = 'content-production';

    } else if (value === 'all-content') {
      this.iconActive = value;
      this.linkActive = value;
      this.router.navigate(['home/instagram/all-content']);
      this.contentCurrentPosition = 'all-content';
    }
  }


  overviewClick(value) {
    this.iconActive = value;
    this.linkActive = value;
    this.router.navigate(['home/instagram/overview']);
  }

  calendarClick(value) {
    this.iconActive = value;
    this.linkActive = value;
    this.router.navigate(['home/calendar']);
  }

  teamMemberClick(value) {
    this.iconActive = value;
    this.linkActive = value;
    this.router.navigate(['home/team-member']);
  }


  ngOnDestroy() {
    // this.x.unsubscribe();
  }
}


