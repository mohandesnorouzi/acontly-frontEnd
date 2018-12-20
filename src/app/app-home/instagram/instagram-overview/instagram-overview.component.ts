import {Component, OnInit} from '@angular/core';
import {AppGlobals} from '../../../services/app-globals.service';

@Component({
  selector: 'app-overview',
  templateUrl: './instagram-overview.component.html',
  styleUrls: ['./instagram-overview.component.scss']
})
export class InstagramOverviewComponent implements OnInit {

  constructor(private appGlobal: AppGlobals) {
    this.appGlobal.activeElements.emit('overview');
  }

  ngOnInit() {
  }

}
