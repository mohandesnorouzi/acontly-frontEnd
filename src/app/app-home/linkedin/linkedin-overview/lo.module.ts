import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LinkedinOverviewComponent} from './linkedin-overview.component';
import {LoRoutingModule} from './lo-routing.module';

@NgModule({
  declarations: [
    LinkedinOverviewComponent
  ],
  imports: [
    CommonModule,
    LoRoutingModule
  ],
  exports: [],
  providers: []
})
export class LoModule {
}
