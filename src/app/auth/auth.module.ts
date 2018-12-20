import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthRoutingModule} from './auth-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AuthComponent} from './auth.component';
import {AuthGuard, LoggedInUserGuard} from '../services/auth-guard.service';
import {AuthService} from '../services/auth.service';
import {AppGlobals} from '../services/app-globals.service';

@NgModule({
  declarations: [
    AuthComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AuthRoutingModule
  ],
  providers: [LoggedInUserGuard, AuthGuard, LoggedInUserGuard, AuthService, AppGlobals]
})
export class AuthModule {
}
