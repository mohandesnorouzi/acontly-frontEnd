import {Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AppGlobals} from '../../../../services/app-globals.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-linkedin-content-production',
  templateUrl: './linkedin-content-production.component.html',
  styleUrls: ['./linkedin-content-production.component.scss']
})
export class LinkedinContentProductionComponent implements OnInit {

  mySwitch: boolean;
  searchValue: string;
  public postLength: any;
  public validTextLength: any;
  public validCommentLength: any;
  viewMode = 'Post';
  createPostForm: FormGroup;
  createArticleForm: FormGroup;
  @ViewChild('boxPosition') public boxPosition: ElementRef;
  innerWidth: any;

  constructor(public appGlobal: AppGlobals, private router: Router) {
    this.mySwitch = false;

    this.appGlobal.activeElements.emit('content-production');


    this.appGlobal.activeBox.subscribe((value: boolean) => {
      if (value) {
        this.boxPosition.nativeElement.style.marginRight = '204px';
      } else {
        this.boxPosition.nativeElement.style.marginRight = '104px';
      }
    });
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.innerWidth = window.innerWidth;

    if (this.appGlobal.checksubTitleSideNav || this.appGlobal.checkMainSideNav) {
      this.boxPosition.nativeElement.style.marginRight = '204px';
    } else if (!this.appGlobal.checksubTitleSideNav || !this.appGlobal.checkMainSideNav) {
      this.boxPosition.nativeElement.style.marginRight = '104px';
    }
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

  // Turn off or on comment
  SwitchStatus() {
    this.mySwitch = !this.mySwitch;
    this.searchValue = '';
  }

  onDraftSubmit() {

  }

  onPublishNowSubmit() {

  }

  onScheduleSubmit() {
    console.log(this.createPostForm);
    console.log(this.createPostForm.controls['text'].value);
  }

  ngOnInit() {

    this.validTextLength = 2200;
    this.validCommentLength = 2200;

    // Initialize form before rendering template so i put this here in ngOnInit
    this.createPostForm = new FormGroup({
      'text': new FormControl(null, Validators.required),
      'comment': new FormControl(null, Validators.required),
      'SwitchToggle': new FormControl(null, Validators.required)
    });

    // Initialize form before rendering template so i put this here in ngOnInit
    this.createArticleForm = new FormGroup({
      'text': new FormControl(null, Validators.required),
      'comment': new FormControl(null, Validators.required),
      'SwitchToggle': new FormControl(null, Validators.required)
    });


    this.innerWidth = window.innerWidth;
    if (this.appGlobal.checksubTitleSideNav) {
      this.boxPosition.nativeElement.style.marginRight = '204px';
    } else {
      this.boxPosition.nativeElement.style.marginRight = '104px';
    }

  }

}
