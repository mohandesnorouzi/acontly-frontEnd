import {Component, OnInit} from '@angular/core';
import {AppGlobals} from '../../../../services/app-globals.service';

@Component({
  selector: 'app-telegram-all-content',
  templateUrl: './telegram-all-content.component.html',
  styleUrls: ['./telegram-all-content.component.scss']
})
export class TelegramAllContentComponent implements OnInit {

  constructor(private appGlobal: AppGlobals) {
  }

  ngOnInit() {
  }

}
