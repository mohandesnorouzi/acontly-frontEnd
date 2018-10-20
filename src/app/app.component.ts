import {Component, OnInit, ViewChild} from '@angular/core';

import {SidenavService} from './services/sidenav.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(private sidenavService: SidenavService) {
  }

  ngOnInit() {
  }
}
