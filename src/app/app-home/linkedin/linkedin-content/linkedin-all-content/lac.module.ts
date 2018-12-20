import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material';
import {ModalModule} from '../../../../modal/modal.module';
import {LinkedinAllContentComponent} from './linkedin-all-content.component';
import {LacRoutingModule} from './lac-routing.module';

@NgModule({
  declarations: [
    LinkedinAllContentComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule,
    MatIconModule,
    LacRoutingModule
  ],
  exports: [],
  providers: []
})
export class LacModule {
}
