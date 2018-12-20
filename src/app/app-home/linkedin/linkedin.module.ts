import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ModalModule} from '../../modal/modal.module';
import {MatIconModule} from '@angular/material';
import {LinkedinRoutingModule} from './linkedin-routing.module';
import {LinkedinComponent} from './linkedin.component';

@NgModule({
  declarations: [
    LinkedinComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule,
    MatIconModule,
    LinkedinRoutingModule
  ],
  exports: [],
  providers: []
})
export class LinkedinModule {
}
