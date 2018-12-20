import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderBLComponent} from './header-bl/header-bl.component';
import {SideheaderBLComponent} from './sideheader-bl/sideheader-bl.component';
import {HeaderComponent} from './header.component';
import {MatIconModule} from '@angular/material/icon';
import {ClickOutsideModule} from 'ng4-click-outside';
import {ModalComponent} from '../../modal/modal.component';
import {ModalModule} from '../../modal/modal.module';
import {AppRoutingModule} from '../../app-routing.module';
import {AuthGuard, LoggedInUserGuard} from '../../services/auth-guard.service';
import {AuthService} from '../../services/auth.service';
import {AppGlobals} from '../../services/app-globals.service';
import {HeaderALComponent} from './header-al/header-al.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {TokenInterceptor} from '../../services/interceptor.service';
import {AddProjectModalComponent} from '../../modal/add-project-modal/add-project-modal.component';

@NgModule({
  declarations: [
    HeaderComponent,
    HeaderBLComponent,
    HeaderALComponent,
    SideheaderBLComponent,
  ],
  imports: [
    CommonModule,
    ModalModule,
    MatIconModule,
    ClickOutsideModule,
    AppRoutingModule
  ],
  exports: [
    HeaderComponent,
    HeaderBLComponent,
    HeaderALComponent,
    AppRoutingModule
  ],
  providers: [AddProjectModalComponent, AuthGuard, LoggedInUserGuard, AuthService, AppGlobals]
})
export class HeaderModule {
}
