import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AppGlobals} from '../services/app-globals.service';
import {AuthGuard, LoggedInUserGuard} from '../services/auth-guard.service';
import {HomeBlModule} from './home-bl/home-bl.module';
import {FooterComponent} from './footer/footer.component';
import {HeaderModule} from './header/header.module';
import {AuthService} from '../services/auth.service';
import {CoreComponent} from './core.component';

@NgModule({
  declarations: [
    CoreComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    HomeBlModule,
  ],
  exports: [
    HeaderModule,
    FooterComponent
  ],
  providers: [AppGlobals, AuthGuard, LoggedInUserGuard, AuthService]
})
export class CoreModule {
}
