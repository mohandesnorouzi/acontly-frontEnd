import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AppGlobals} from '../../../services/app-globals.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-telegram',
  templateUrl: './telegram.component.html',
  styleUrls: ['./telegram.component.scss']
})
export class TelegramComponent implements OnInit {

  mySwitch: boolean;
  searchValue: string;
  public postLength: any;
  public validTextLength: any;
  public validCommentLength: any;
  createPostForm: FormGroup;

  constructor(public appGlobal: AppGlobals, private router: Router) {
    this.mySwitch = false;
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

  ngOnInit() {
    this.validTextLength = 2200;
    this.validCommentLength = 2200;

    // Initialize form before rendering template so i put this here in ngOnInit
    this.createPostForm = new FormGroup({
      'text': new FormControl(null, Validators.required),
      'comment': new FormControl(null, Validators.required),
      'SwitchToggle': new FormControl(null, Validators.required)
    });

  }

}
