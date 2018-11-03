import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {AppGlobals} from '../../../services/app-globals.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-instagram',
  templateUrl: './instagram.component.html',
  styleUrls: ['./instagram.component.scss']
})

export class InstagramComponent implements OnInit {

  mySwitch: boolean;
  createPostForm: FormGroup;
  @ViewChild('boxPosition') public boxPosition;


  constructor(public appGlobal: AppGlobals) {
    this.mySwitch = false;
  }


  SwitchStatus() {
    this.mySwitch = !this.mySwitch;
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
      document.getElementById('boxPosition').style.marginRight = '240px';
    } else {
      document.getElementById('boxPosition').style.marginRight = '100px';
    }
  }

}
