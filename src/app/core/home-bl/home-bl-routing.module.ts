import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeBlComponent} from './home-bl.component';

const homeRoutes: Routes = [
  {path: '', component: HomeBlComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(homeRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class HomeBlRoutingModule {
}
