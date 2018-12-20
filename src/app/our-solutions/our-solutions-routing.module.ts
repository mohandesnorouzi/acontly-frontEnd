import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {OurSolutionsComponent} from './our-solutions.component';

const ourSolutionRoutes: Routes = [
  {path: '', component: OurSolutionsComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(ourSolutionRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class OurSolutionsRoutingModule {
}
