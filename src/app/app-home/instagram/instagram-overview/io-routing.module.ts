import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {InstagramOverviewComponent} from './instagram-overview.component';

const ioRoutes: Routes = [
  {path: '', component: InstagramOverviewComponent},
];

@NgModule({
  imports: [
    RouterModule.forChild(ioRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class IoRoutingModule {
}
