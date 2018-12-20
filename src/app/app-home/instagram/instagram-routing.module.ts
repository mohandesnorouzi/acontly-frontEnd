import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {InstagramComponent} from './instagram.component';
import {InstagramAnalysisComponent} from './instagram-analysis/instagram-analysis.component';

const instagramRoutes: Routes = [
  {
    path: '', component: InstagramComponent,
    children: [
      {path: 'overview', loadChildren: './instagram-overview/io.module#IoModule'},
      {path: 'content-production', loadChildren: './instagram-content/instagram-content-production/icp.module#IcpModule'},
      {path: 'all-content', loadChildren: './instagram-content/instagram-all-content/iac.module#IacModule'},
      {path: 'analyz', component: InstagramAnalysisComponent},
    ]
  }

];

@NgModule({
  imports: [
    RouterModule.forChild(instagramRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class InstagramRoutingModule {
}
