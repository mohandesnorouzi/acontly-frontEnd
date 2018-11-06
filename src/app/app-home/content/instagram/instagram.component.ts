import {Component, HostListener, OnInit, ViewChild} from '@angular/core';
import {AppGlobals} from '../../../services/app-globals.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-instagram',
  templateUrl: './instagram.component.html',
  styleUrls: ['./instagram.component.scss']
})

export class InstagramComponent implements OnInit {

  mySwitch: boolean;
  searchValue: string;
  mobHeight: any;
  mobWidth: any;
  innerWidth: any;
  createPostForm: FormGroup;
  @ViewChild('boxPosition') public boxPosition;


  constructor(public appGlobal: AppGlobals) {
    this.mySwitch = false;
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


  SwitchStatus() {
    this.mySwitch = !this.mySwitch;
    this.searchValue = '';
    // console.log(this.mySwitch);
  }

  ngOnInit() {
    // Initialize form before rendering template so i put this here in ngOnInit
    this.createPostForm = new FormGroup({
      'text': new FormControl(null, Validators.required),
      'comment': new FormControl(null, Validators.required),
      'SwitchToggle': new FormControl(null, Validators.required)
    });

    this.innerWidth = window.innerWidth;
    if (this.appGlobal.checksubTitleSideNav) {
      // document.getElementById('boxPosition').style.marginRight = '248px';
      if (this.innerWidth > 1200) {
        document.getElementById('boxPosition').style.marginRight = '17%';
      } else if (this.innerWidth < 1200) {
        document.getElementById('boxPosition').style.marginRight = '204px';
        console.log('i am here');
      }
    } else {
      // document.getElementById('boxPosition').style.marginRight = '108px';
      document.getElementById('boxPosition').style.marginRight = '104px';
    }
  }

}
