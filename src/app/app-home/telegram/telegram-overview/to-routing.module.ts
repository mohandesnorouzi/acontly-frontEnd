import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TelegramOverviewComponent} from './telegram-overview.component';

const tpRoutes: Routes = [
  {path: '', component: TelegramOverviewComponent},
];

@NgModule({
  imports: [
    RouterModule.forChild(tpRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ToRoutingModule {
}
