import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PricingComponent} from './pricing.component';

const pricingRoutes: Routes = [
  {path: '', component: PricingComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(pricingRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class PricingRoutingModule {
}
