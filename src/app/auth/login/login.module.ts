import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './login.component';
import {LoginRoutingModule} from './login-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {AuthGuard, LoggedInUserGuard} from '../../services/auth-guard.service';
import {AppGlobals} from '../../services/app-globals.service';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LoginRoutingModule
  ],
  providers: [AuthGuard, LoggedInUserGuard, AuthService, AppGlobals]
})
export class LoginModule {
}
