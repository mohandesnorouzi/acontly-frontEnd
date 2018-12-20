import {Component, OnInit} from '@angular/core';
import {AppGlobals} from '../../../services/app-globals.service';

@Component({
  selector: 'app-telegram-overview',
  templateUrl: './telegram-overview.component.html',
  styleUrls: ['./telegram-overview.component.scss']
})
export class TelegramOverviewComponent implements OnInit {

  constructor(private appGlobal: AppGlobals) {
    this.appGlobal.activeElements.emit('overview');
  }

  ngOnInit() {
  }

}
