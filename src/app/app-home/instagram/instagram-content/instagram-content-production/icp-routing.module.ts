import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {InstagramContentProductionComponent} from './instagram-content-production.component';

const icpRoutes: Routes = [
  {path: '', component: InstagramContentProductionComponent},
];

@NgModule({
  imports: [
    RouterModule.forChild(icpRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class IcpRoutingModule {
}
