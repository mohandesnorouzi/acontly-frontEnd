import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {SidenavService} from './services/sidenav.service';
import {Icons} from './services/icons';
import {MatIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';
import {AppGlobals} from './services/app-globals.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  @ViewChild('mySideNav') mySideNav: ElementRef;

  constructor(private sidenavService: SidenavService, private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer
    , public appGlobal: AppGlobals) {

    const icons = new Icons();
    icons.icons(this.matIconRegistry, this.domSanitizer);
  }

  ngOnInit() {
    this.appGlobal.isAuthenticated = false;
  }
}
