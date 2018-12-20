import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TeamMemberComponent} from './team-member.component';

const teamMemberRoutes: Routes = [
  {path: '', component: TeamMemberComponent},
];

@NgModule({
  imports: [
    RouterModule.forChild(teamMemberRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class TeamMemberRoutingModule {
}
