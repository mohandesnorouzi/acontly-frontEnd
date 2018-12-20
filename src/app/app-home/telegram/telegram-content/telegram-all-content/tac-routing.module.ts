import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TelegramAllContentComponent} from './telegram-all-content.component';

const tacRoutes: Routes = [
  {path: '', component: TelegramAllContentComponent},
];

@NgModule({
  imports: [
    RouterModule.forChild(tacRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class TacRoutingModule {
}
