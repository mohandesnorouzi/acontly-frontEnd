import {Component, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-add-social-modal',
  templateUrl: './add-social-modal.component.html',
  styleUrls: ['./add-social-modal.component.scss']
})
export class AddSocialModalComponent implements OnInit {

  social: string;
  submitSocialActive: boolean;
  @ViewChild('addSocialModal') public addSocialModal;

  constructor() {
  }


  openAddSocialModal() {
    this.addSocialModal.show();
    this.submitSocialActive = false;
    this.social = '';

  }

  closeAddSocialModal() {
    this.addSocialModal.hide();
    this.submitSocialActive = false;
    this.social = '';
  }

  onClickSocial(value) {
    this.social = value;
    this.submitSocialActive = true;
  }


  onAddSocial(social) {
    localStorage.setItem('activeAccountMedium', social);
    this.addSocialModal.hide();
  }

  ngOnInit() {
  }

}
