import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {AppGlobals} from '../../services/app-globals.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public appGlobal: AppGlobals, public router: Router) {
  }

  ngOnInit() {
  }

}
