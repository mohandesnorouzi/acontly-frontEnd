import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AppHomeComponent} from './app-home.component';
import {SidenavModule} from './sidenav/sidenav.module';
import {AppGlobals} from '../services/app-globals.service';
import {AuthGuard, LoggedInUserGuard} from '../services/auth-guard.service';
import {AppHomeRoutingModule} from './app-home-routing.module';
import {TwitterComponent} from './twitter/twitter.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AuthService} from '../services/auth.service';
import {ModalModule} from '../modal/modal.module';

@NgModule({
  declarations: [
    AppHomeComponent,
    TwitterComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SidenavModule,
    ModalModule,
    AppHomeRoutingModule
  ],
  exports: [
    AppHomeComponent,
  ],
  providers: [AppGlobals, AuthGuard, LoggedInUserGuard, AuthService]
})
export class AppHomeModule {
}
