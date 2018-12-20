import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material';
import {AppGlobals} from '../../../../services/app-globals.service';
import {ModalModule} from '../../../../modal/modal.module';
import {IcpRoutingModule} from './icp-routing.module';
import {InstagramContentProductionComponent} from './instagram-content-production.component';

@NgModule({
  declarations: [
    InstagramContentProductionComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule,
    MatIconModule,
    IcpRoutingModule
  ],
  exports: [],
  providers: []
})
export class IcpModule {
}
