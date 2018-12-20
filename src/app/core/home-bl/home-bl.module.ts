import {NgModule} from '@angular/core';
import {HomeBlComponent} from './home-bl.component';
import {CommonModule} from '@angular/common';
import {UsedForComponent} from './used-for/used-for.component';
import {TestimonialComponent} from './testimonial/testimonial.component';
import {EndTargetComponent} from './end-target/end-target.component';
import {ValuePropositionComponent} from './value-proposition/value-proposition.component';
import {HomeBlRoutingModule} from './home-bl-routing.module';


@NgModule({
  declarations: [
    HomeBlComponent,
    ValuePropositionComponent,
    UsedForComponent,
    TestimonialComponent,
    EndTargetComponent
  ],
  imports: [
    CommonModule,
    HomeBlRoutingModule
  ],
})
export class HomeBlModule {
}
