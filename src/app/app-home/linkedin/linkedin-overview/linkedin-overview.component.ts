import {Component, OnInit} from '@angular/core';
import {AppGlobals} from '../../../services/app-globals.service';

@Component({
  selector: 'app-linkedin-overview',
  templateUrl: './linkedin-overview.component.html',
  styleUrls: ['./linkedin-overview.component.scss']
})
export class LinkedinOverviewComponent implements OnInit {

  constructor(private appGlobal: AppGlobals) {
    this.appGlobal.activeElements.emit('overview');
  }

  ngOnInit() {
  }

}
