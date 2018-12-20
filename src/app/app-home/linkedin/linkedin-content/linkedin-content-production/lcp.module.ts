import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material';
import {AppGlobals} from '../../../../services/app-globals.service';
import {ModalModule} from '../../../../modal/modal.module';
import {LcpRoutingModule} from './lcp-routing.module';
import {LinkedinContentProductionComponent} from './linkedin-content-production.component';

@NgModule({
  declarations: [
    LinkedinContentProductionComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule,
    MatIconModule,
    LcpRoutingModule
  ],
  exports: [],
  providers: []
})
export class LcpModule {
}
