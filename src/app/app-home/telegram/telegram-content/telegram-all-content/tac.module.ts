import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material';
import {ModalModule} from '../../../../modal/modal.module';
import {TelegramAllContentComponent} from './telegram-all-content.component';
import {TacRoutingModule} from './tac-routing.module';

@NgModule({
  declarations: [
    TelegramAllContentComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule,
    MatIconModule,
    TacRoutingModule
  ],
  exports: [],
  providers: []
})
export class TacModule {
}
