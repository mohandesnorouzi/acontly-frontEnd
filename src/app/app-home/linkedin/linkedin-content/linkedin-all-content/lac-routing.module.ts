import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LinkedinAllContentComponent} from './linkedin-all-content.component';

const lacRoutes: Routes = [
  {path: '', component: LinkedinAllContentComponent},
];

@NgModule({
  imports: [
    RouterModule.forChild(lacRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class LacRoutingModule {
}
