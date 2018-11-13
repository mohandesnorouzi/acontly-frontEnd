import {Component, HostListener, OnInit, ViewChild} from '@angular/core';
import {AppGlobals} from '../../../services/app-globals.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-content-production',
  templateUrl: './content-production.component.html',
  styleUrls: ['./content-production.component.scss']
})
export class ContentProductionComponent implements OnInit {

  innerWidth: any;
  @ViewChild('boxPosition') public boxPosition;
  whichSocial: string;

  constructor(public appGlobal: AppGlobals, private router: Router) {
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.innerWidth = window.innerWidth;

    if (this.appGlobal.checksubTitleSideNav || this.appGlobal.checkMainSideNav) {
      if (this.innerWidth > 1200) {
        document.getElementById('boxPosition').style.marginRight = '17%';
      } else if (this.innerWidth < 1200) {
        document.getElementById('boxPosition').style.marginRight = '204px';
      }
    } else if (!this.appGlobal.checksubTitleSideNav || !this.appGlobal.checkMainSideNav) {
      document.getElementById('boxPosition').style.marginRight = '104px';
    }
  }


  ngOnInit() {

    // this.whichSocial = 'telegram';
    // this.whichSocial = 'instagram';
    this.whichSocial = 'linkedin';
    this.innerWidth = window.innerWidth;
    if (this.appGlobal.checksubTitleSideNav) {
      if (this.innerWidth > 1200) {
        document.getElementById('boxPosition').style.marginRight = '17%';
      } else if (this.innerWidth < 1200) {
        document.getElementById('boxPosition').style.marginRight = '204px';
        console.log('i am here');
      }
    } else {
      document.getElementById('boxPosition').style.marginRight = '104px';
    }
  }

}
