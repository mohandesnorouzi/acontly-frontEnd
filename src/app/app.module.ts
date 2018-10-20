import {BrowserModule} from '@angular/platform-browser';
import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppComponent} from './app.component';

import {MDBBootstrapModule} from 'angular-bootstrap-md';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HeaderComponent} from './header/header.component';
import {HomeBlComponent} from './home-bl/home-bl.component';
import {FooterComponent} from './footer/footer.component';
import {ContactUsComponent} from './contact-us/contact-us.component';
import {OurSolutionsComponent} from './our-solutions/our-solutions.component';
import {PricingComponent} from './pricing/pricing.component';
import {FeaturesComponent} from './features/features.component';
import {LoginComponent} from './auth/login/login.component';
import {SignUpComponent} from './auth/sign-up/sign-up.component';
import {AppRoutingModule} from './app-routing.module';
import {HeaderService} from './header/header.service';
import {AuthComponent} from './auth/auth.component';
import {AppHomeComponent} from './app-home/app-home.component';
import {AuthService} from './services/auth.service';
import {AuthGuard, LoggedInUserGuard} from './services/auth-guard.service';
import {FormValidation} from './services/form-validation.service';
import {SidenavComponent} from './app-home/sidenav/sidenav.component';
import {SidenavService} from './services/sidenav.service';

import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';


import {OverviewComponent} from './app-home/overview/overview.component';
import {OverviewContentComponent} from './app-home/overview/overview-content/overview-content.component';
import {OverviewAnalysisComponent} from './app-home/overview/overview-analysis/overview-analysis.component';
import {ErrorInterceptor, TokenInterceptor} from './services/interceptor.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeBlComponent,
    FooterComponent,
    ContactUsComponent,
    OurSolutionsComponent,
    PricingComponent,
    FeaturesComponent,
    LoginComponent,
    SignUpComponent,
    AuthComponent,
    AppHomeComponent,
    SidenavComponent,
    OverviewComponent,
    OverviewContentComponent,
    OverviewAnalysisComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [HeaderService, AuthService, LoggedInUserGuard, AuthGuard, FormValidation, SidenavService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    }

  ],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule {
}
