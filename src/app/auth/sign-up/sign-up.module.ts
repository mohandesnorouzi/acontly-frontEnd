import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SignUpComponent} from './sign-up.component';
import {SignUpRoutingModule} from './sign-up-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {AuthGuard, LoggedInUserGuard} from '../../services/auth-guard.service';
import {AppGlobals} from '../../services/app-globals.service';

@NgModule({
  declarations: [
    SignUpComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SignUpRoutingModule
  ],
  providers: [AuthGuard, LoggedInUserGuard, AuthService, AppGlobals]
})
export class SignUpModule {
}
