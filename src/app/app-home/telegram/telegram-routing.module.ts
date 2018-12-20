import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TelegramComponent} from './telegram.component';

const telegramRoutes: Routes = [
  {
    path: '', component: TelegramComponent,
    children: [
      {path: 'overview', loadChildren: './telegram-overview/to.module#ToModule'},
      {path: 'content-production', loadChildren: './telegram-content/telegram-content-production/tcp.module#TcpModule'},
      {path: 'all-content', loadChildren: './telegram-content/telegram-all-content/tac.module#TacModule'},
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(telegramRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class TelegramRoutingModule {
}
