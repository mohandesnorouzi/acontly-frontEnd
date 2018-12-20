import {BrowserModule} from '@angular/platform-browser';
import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import {AppComponent} from './app.component';

import {MDBBootstrapModule} from 'angular-bootstrap-md';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FormValidation} from './services/form-validation.service';
import {SidenavService} from './services/sidenav.service';

import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';


import {TokenInterceptor} from './services/interceptor.service';
import {CompanySizeService} from './services/company-size.service';
import {IndustryService} from './services/industry.service';
import {CompanyRoleService} from './services/company-role.service';
import {MyRendererService} from './services/renderer.service';
import {AngularSvgIconModule} from 'angular-svg-icon';
import {MatIconModule} from '@angular/material/icon';
import {AuthGuard, LoggedInUserGuard} from './services/auth-guard.service';
import {AuthService} from './services/auth.service';
import {AppGlobals} from './services/app-globals.service';
import {AppRoutingModule} from './app-routing.module';
import {CoreModule} from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AngularFontAwesomeModule,
    AngularSvgIconModule,
    MatIconModule,
    CoreModule,
  ],
  providers: [FormValidation, SidenavService, LoggedInUserGuard, AuthService, AuthGuard, AppGlobals,
    CompanySizeService, IndustryService, CompanyRoleService,
    MyRendererService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: ErrorInterceptor,
    //   multi: true
    // }

  ],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule {
}
