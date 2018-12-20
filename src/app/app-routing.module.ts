import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {AuthGuard, LoggedInUserGuard} from './services/auth-guard.service';

const appRoutes: Routes = [
  // {path: '', component: HomeBlComponent, canActivate: [LoggedInUserGuard]},
  {path: '', loadChildren: './core/home-bl/home-bl.module#HomeBlModule', canActivate: [LoggedInUserGuard]},
  // {path: '', loadChildren: './core/core.module#CoreModule', canActivate: [LoggedInUserGuard]},
  // {path: '', component: CoreComponent},
  // {path: '', component: HomeBlComponent, canActivate: [LoggedInUserGuard]},
  {path: 'app', loadChildren: './auth/auth.module#AuthModule'},
  // {path: 'login', loadChildren: './auth/auth.module#AuthModule', canActivate: [LoggedInUserGuard]},
  // {path: 'sign-up', loadChildren: './auth/auth.module#AuthModule', canActivate: [LoggedInUserGuard]},
  {path: 'contact-us', loadChildren: './contact-us/contact-us.module#ContactUsModule'},
  {path: 'features', loadChildren: './features/features.module#FeaturesModule'},
  {path: 'solutions', loadChildren: './our-solutions/our-solutions.module#OurSolutionsModule'},
  {path: 'pricing', loadChildren: './pricing/pricing.module#PricingModule'},
  {path: 'home', loadChildren: './app-home/app-home.module#AppHomeModule', canActivate: [AuthGuard]},
  // {
  //   path: 'instagram-overview', canActivate: [AuthGuard], component: AppHomeComponent, children: [
  //     {path: 'content-instagram-overview', component: OverviewContentComponent},
  //     {path: 'analysis-instagram-overview', component: OverviewAnalysisComponent},
  //     {path: 'content', redirectTo: 'content/production'},
  //     {path: 'content/production', component: ContentProductionComponent},
  //     {path: 'content/all', component: AllContentComponent},
  //     {path: 'calendar', component: CalendarComponent},
  //   ]
  // },
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
