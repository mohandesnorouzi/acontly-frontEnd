import {Component, OnInit} from '@angular/core';
import {AppGlobals} from '../../../services/app-globals.service';

@Component({
  selector: 'app-header-bl',
  templateUrl: './header-bl.component.html',
  styleUrls: ['./header-bl.component.scss']
})
export class HeaderBLComponent implements OnInit {

  constructor(public appGlobal: AppGlobals) {
  }

  ngOnInit() {
  }

}
