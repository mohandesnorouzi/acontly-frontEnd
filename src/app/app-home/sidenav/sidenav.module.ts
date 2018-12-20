import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {ClickOutsideModule} from 'ng4-click-outside';
import {ModalModule} from '../../modal/modal.module';
import {SidenavComponent} from './sidenav.component';
import {AuthGuard, LoggedInUserGuard} from '../../services/auth-guard.service';
import {AuthService} from '../../services/auth.service';
import {AppHomeRoutingModule} from '../app-home-routing.module';
import {TelegramContentProductionComponent} from '../telegram/telegram-content/telegram-content-production/telegram-content-production.component';
import {AppGlobals} from '../../services/app-globals.service';
import {LinkedinContentProductionComponent} from '../linkedin/linkedin-content/linkedin-content-production/linkedin-content-production.component';

@NgModule({
  declarations: [
    SidenavComponent
  ],
  imports: [
    CommonModule,
    ModalModule,
    MatIconModule,
    ClickOutsideModule,
    AppHomeRoutingModule
  ],
  exports: [
    SidenavComponent
  ],
  providers: [AppGlobals, AuthGuard, LoggedInUserGuard, AuthService]
})
export class SidenavModule {
}
