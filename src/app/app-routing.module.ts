import {Routes, RouterModule} from '@angular/router';
import {HomeBlComponent} from './home-bl/home-bl.component';
import {LoginComponent} from './auth/login/login.component';
import {SignUpComponent} from './auth/sign-up/sign-up.component';
import {NgModule} from '@angular/core';
import {ContactUsComponent} from './contact-us/contact-us.component';
import {FeaturesComponent} from './features/features.component';
import {OurSolutionsComponent} from './our-solutions/our-solutions.component';
import {PricingComponent} from './pricing/pricing.component';
import {AppHomeComponent} from './app-home/app-home.component';
import {AuthGuard, LoggedInUserGuard} from './services/auth-guard.service';
import {OverviewAnalysisComponent} from './app-home/overview/overview-analysis/overview-analysis.component';
import {OverviewContentComponent} from './app-home/overview/overview-content/overview-content.component';
import {OverviewComponent} from './app-home/overview/overview.component';
import {ContentComponent} from './app-home/content/content.component';
import {AllContentComponent} from './app-home/content/all-content/all-content.component';
import {ContentProductionComponent} from './app-home/content/content-production/content-production.component';

const appRoutes: Routes = [
  {path: '', component: HomeBlComponent, canActivate: [LoggedInUserGuard]},
  {path: 'login', component: LoginComponent, canActivate: [LoggedInUserGuard]},
  {path: 'sign-up', component: SignUpComponent, canActivate: [LoggedInUserGuard]},
  {path: 'contact-us', component: ContactUsComponent},
  {path: 'features', component: FeaturesComponent},
  {path: 'solutions', component: OurSolutionsComponent},
  {path: 'pricing', component: PricingComponent},
  {
    path: 'overview', canActivate: [AuthGuard], component: AppHomeComponent, children: [
      {path: 'content-overview', component: OverviewContentComponent},
      {path: 'analysis-overview', component: OverviewAnalysisComponent},
      {path: 'content/production', component: ContentProductionComponent},
      {path: 'content/all', component: AllContentComponent},
    ]
  },
  {path: '**', redirectTo: ''}, /*send client to home page when ever he goes to undefined url in site*/
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule {
}
