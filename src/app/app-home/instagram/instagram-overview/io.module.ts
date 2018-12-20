import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InstagramOverviewComponent} from './instagram-overview.component';
import {IoRoutingModule} from './io-routing.module';

@NgModule({
  declarations: [
    InstagramOverviewComponent
  ],
  imports: [
    CommonModule,
    IoRoutingModule
  ],
  exports: [],
  providers: []
})
export class IoModule {
}
