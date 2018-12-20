import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {InstagramAnalysisComponent} from './instagram-analysis/instagram-analysis.component';
import {InstagramRoutingModule} from './instagram-routing.module';
import {ModalModule} from '../../modal/modal.module';
import {MatIconModule} from '@angular/material';
import {InstagramComponent} from './instagram.component';

@NgModule({
  declarations: [
    InstagramAnalysisComponent,
    InstagramComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule,
    MatIconModule,
    InstagramRoutingModule
  ],
  exports: [],
  providers: []
})
export class InstagramModule {
}
