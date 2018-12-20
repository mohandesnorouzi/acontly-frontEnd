import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ModalModule} from '../../modal/modal.module';
import {MatIconModule} from '@angular/material';
import {TelegramRoutingModule} from './telegram-routing.module';
import {TelegramComponent} from './telegram.component';

@NgModule({
  declarations: [
    TelegramComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule,
    MatIconModule,
    TelegramRoutingModule
  ],
  exports: [],
  providers: []
})
export class TelegramModule {
}
