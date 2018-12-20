import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TeamMemberComponent} from './team-member.component';
import {TeamMemberRoutingModule} from './team-member-routing.module';

@NgModule({
  declarations: [
    TeamMemberComponent
  ],
  imports: [
    CommonModule,
    TeamMemberRoutingModule
  ],
  exports: [],
  providers: []
})
export class TeamMemberModule {
}
