import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material';
import {TelegramContentProductionComponent} from './telegram-content-production.component';
import {ModalModule} from '../../../../modal/modal.module';
import {TcpRoutingModule} from './tcp-routing.module';

@NgModule({
  declarations: [
    TelegramContentProductionComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule,
    MatIconModule,
    TcpRoutingModule
  ],
  exports: [],
  providers: []
})
export class TcpModule {
}
