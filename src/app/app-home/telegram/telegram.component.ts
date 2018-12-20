import {Component, OnInit} from '@angular/core';
import {AppGlobals} from '../../services/app-globals.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-telegram',
  templateUrl: './telegram.component.html',
})
export class TelegramComponent implements OnInit {

  constructor(private appGlobal: AppGlobals, private router: Router) {
    if (this.router.url === '/home/telegram') {
      this.router.navigate(['home/telegram/overview']);
    }
  }

  ngOnInit() {
  }

}
