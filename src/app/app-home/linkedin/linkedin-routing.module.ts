import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {InstagramComponent} from '../instagram/instagram.component';
import {InstagramAnalysisComponent} from '../instagram/instagram-analysis/instagram-analysis.component';
import {LinkedinComponent} from './linkedin.component';

const linkedinRoutes: Routes = [
  {
    path: '', component: LinkedinComponent,
    children: [
      {path: 'overview', loadChildren: './linkedin-overview/lo.module#LoModule'},
      {path: 'content-production', loadChildren: './linkedin-content/linkedin-content-production/lcp.module#LcpModule'},
      {path: 'all-content', loadChildren: './linkedin-content/linkedin-all-content/lac.module#LacModule'},
      // {path: 'analyz', component: InstagramAnalysisComponent},
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(linkedinRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class LinkedinRoutingModule {
}
