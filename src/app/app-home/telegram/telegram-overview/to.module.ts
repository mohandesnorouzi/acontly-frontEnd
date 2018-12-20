import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material';
import {TelegramOverviewComponent} from './telegram-overview.component';
import {ToRoutingModule} from './to-routing.module';
import {ModalModule} from '../../../modal/modal.module';

@NgModule({
  declarations: [
    TelegramOverviewComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule,
    MatIconModule,
    ToRoutingModule
  ],
  exports: [],
  providers: []
})
export class ToModule {
}
