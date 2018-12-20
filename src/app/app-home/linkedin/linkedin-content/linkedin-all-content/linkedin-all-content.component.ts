import {Component, OnInit} from '@angular/core';
import {AppGlobals} from '../../../../services/app-globals.service';

@Component({
  selector: 'app-linkedin-all-content',
  templateUrl: './linkedin-all-content.component.html',
  styleUrls: ['./linkedin-all-content.component.scss']
})
export class LinkedinAllContentComponent implements OnInit {

  constructor(private appGlobal: AppGlobals) {
  }

  ngOnInit() {
  }

}
