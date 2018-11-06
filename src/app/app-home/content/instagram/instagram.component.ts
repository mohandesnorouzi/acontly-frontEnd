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

    this.onResize();

  }

  @HostListener('window:resize', ['$event'])
  onResize(event?) {
    this.innerWidth = window.innerWidth;
    console.log(this.innerWidth);
    if (this.appGlobal.checksubTitleSideNav) {
      if (this.innerWidth > 1200) {
        document.getElementById('boxPosition').style.marginRight = '17%';
      }
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


    if (this.appGlobal.checksubTitleSideNav) {
      // document.getElementById('boxPosition').style.marginRight = '248px';
      if (this.innerWidth > 1200) {
        document.getElementById('boxPosition').style.marginRight = '17%';
      }

      if (this.innerWidth < 1200) {
        console.log('hi');
        document.getElementById('boxPosition').style.marginRight = '20%';
      }

    } else {
      // document.getElementById('boxPosition').style.marginRight = '108px';
      document.getElementById('boxPosition').style.marginRight = '8%';
    }
  }

}
