import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LinkedinContentProductionComponent} from './linkedin-content-production.component';

const lcpRoutes: Routes = [
  {path: '', component: LinkedinContentProductionComponent},
];

@NgModule({
  imports: [
    RouterModule.forChild(lcpRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class LcpRoutingModule {
}
