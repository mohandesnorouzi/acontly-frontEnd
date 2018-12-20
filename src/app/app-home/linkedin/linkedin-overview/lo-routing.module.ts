import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LinkedinOverviewComponent} from './linkedin-overview.component';

const loRoutes: Routes = [
  {path: '', component: LinkedinOverviewComponent},
];

@NgModule({
  imports: [
    RouterModule.forChild(loRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class LoRoutingModule {
}
