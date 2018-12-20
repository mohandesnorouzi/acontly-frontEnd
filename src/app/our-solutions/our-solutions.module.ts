import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OurSolutionsComponent} from './our-solutions.component';
import {OurSolutionsRoutingModule} from './our-solutions-routing.module';

@NgModule({
  declarations: [
    OurSolutionsComponent
  ],
  imports: [
    CommonModule,
    OurSolutionsRoutingModule
  ]
})
export class OurSolutionsModule {
}
