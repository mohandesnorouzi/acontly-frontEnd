import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {InstagramAllContentComponent} from './instagram-all-content.component';

const iacRoutes: Routes = [
  {path: '', component: InstagramAllContentComponent},
];

@NgModule({
  imports: [
    RouterModule.forChild(iacRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class IacRoutingModule {
}
