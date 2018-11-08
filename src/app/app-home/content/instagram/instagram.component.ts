import {Component, HostListener, Input, OnInit, ViewChild} from '@angular/core';
import {AppGlobals} from '../../../services/app-globals.service';
import {FormControl, FormGroup, MaxLengthValidator, Validators} from '@angular/forms';
import {Router} from '@angular/router';


@Component({
  selector: 'app-instagram',
  templateUrl: './instagram.component.html',
  styleUrls: ['./instagram.component.scss']
})

export class InstagramComponent implements OnInit {

  mySwitch: boolean;
  searchValue: string;
  innerWidth: any;
  public postLength: any;
  public validTextLength: any;
  public validCommentLength: any;
  createPostForm: FormGroup;
  @ViewChild('boxPosition') public boxPosition;
  @Input() latestInputValue: number;

  constructor(public appGlobal: AppGlobals, private router: Router) {
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


  @HostListener('keydown', ['$event']) onKeyDown(event) {
    const e = <KeyboardEvent> event;
    console.log(this.latestInputValue);
  }


  postLengthCheck(input) {

    if (input === 'text') {
      if (this.createPostForm.controls['text'].value !== null) {
        this.postLength = this.createPostForm.controls['text'].value.length;
        this.validTextLength = 2200 - this.postLength;
      }
    } else if (input === 'comment') {
      if (this.createPostForm.controls['comment'].value !== null) {
        this.postLength = this.createPostForm.controls['comment'].value.length;
        this.validCommentLength = 2200 - this.postLength;
      }
    }
  }

  SwitchStatus() {
    this.mySwitch = !this.mySwitch;
    this.searchValue = '';
    // console.log(this.mySwitch);
  }

  getURL() {
    return this.router.url;
  }

  ngOnInit() {
    // this.appGlobal.currentURL = this.router.url;
    this.validTextLength = 2200;
    this.validCommentLength = 2200;

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
