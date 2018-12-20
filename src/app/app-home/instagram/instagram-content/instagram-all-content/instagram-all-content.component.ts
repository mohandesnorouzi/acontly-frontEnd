import {Component, OnInit} from '@angular/core';
import {AppGlobals} from '../../../../services/app-globals.service';

@Component({
  selector: 'app-instagram-all-content',
  templateUrl: './instagram-all-content.component.html',
  styleUrls: ['./instagram-all-content.component.scss']
})
export class InstagramAllContentComponent implements OnInit {

  constructor(private appGlobal: AppGlobals) {
    this.appGlobal.activeElements.emit('all-content');
  }

  ngOnInit() {
  }

}
