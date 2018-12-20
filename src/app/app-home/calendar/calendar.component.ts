import {Component, OnInit} from '@angular/core';
import {AppGlobals} from '../../services/app-globals.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  constructor(private appGlobal: AppGlobals) {
    this.appGlobal.activeElements.emit('calendar');
  }

  ngOnInit() {
  }

}
