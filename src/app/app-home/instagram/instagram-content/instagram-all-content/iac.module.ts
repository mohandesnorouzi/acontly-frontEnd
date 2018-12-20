import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material';
import {AppGlobals} from '../../../../services/app-globals.service';
import {ModalModule} from '../../../../modal/modal.module';
import {IacRoutingModule} from './iac-routing.module';
import {InstagramAllContentComponent} from './instagram-all-content.component';

@NgModule({
  declarations: [
    InstagramAllContentComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule,
    MatIconModule,
    IacRoutingModule
  ],
  exports: [],
  providers: []
})
export class IacModule {

  constructor() {
  }

}
