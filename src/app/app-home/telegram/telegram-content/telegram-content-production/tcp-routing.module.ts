import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TelegramContentProductionComponent} from './telegram-content-production.component';

const tcpRoutes: Routes = [
  {path: '', component: TelegramContentProductionComponent},
];

@NgModule({
  imports: [
    RouterModule.forChild(tcpRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class TcpRoutingModule {
}
