import {Component, OnInit, Renderer2} from '@angular/core';
import {SidenavService} from '../services/sidenav.service';

@Component({
  selector: 'app-app-home',
  templateUrl: './app-home.component.html',
  styleUrls: ['./app-home.component.scss']
})
export class AppHomeComponent implements OnInit {

  constructor(private sidenav: SidenavService, private renderer: Renderer2) {
    this.renderer.setStyle(document.body, 'background-color', '#fdfdfd');
  }

  ngOnInit() {
  }

  toggleSidenav() {
    this.sidenav.toggle();
  }

}
