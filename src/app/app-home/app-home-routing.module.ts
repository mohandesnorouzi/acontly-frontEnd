import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from '../services/auth-guard.service';
import {AppHomeComponent} from './app-home.component';

const appHomeRoutes: Routes = [
  {
    path: '', canActivate: [AuthGuard], component: AppHomeComponent, children: [

      // {path: '', redirectTo: 'content-production'},
      // {path: 'content-production', component: InstagramContentProductionComponent }
      {path: 'instagram', loadChildren: './instagram/instagram.module#InstagramModule'},
      {path: 'telegram', loadChildren: './telegram/telegram.module#TelegramModule'},
      {path: 'linkedin', loadChildren: './linkedin/linkedin.module#LinkedinModule'},
      // {path: 'all-content', component: InstagramAllContentComponent},
      // {path: '', component: InstagramContentProductionComponent}
      // {path: 'content-instagram-overview', component: OverviewContentComponent},
      // {path: 'analysis-instagram-overview', component: OverviewAnalysisComponent},
      // {path: 'content', redirectTo: 'content/production'},
      // {path: 'content/production', component: ContentProductionComponent},
      // {path: 'content/all', component: AllContentComponent},
      {path: 'calendar', loadChildren: './calendar/calendar.module#CalendarModule'},
      {path: 'team-member', loadChildren: './team-member/team-member.module#TeamMemberModule'},
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(appHomeRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppHomeRoutingModule {
}
