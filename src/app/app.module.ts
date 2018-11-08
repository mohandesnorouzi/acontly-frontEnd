import {BrowserModule} from '@angular/platform-browser';
import {Injectable, NgModule, NO_ERRORS_SCHEMA, Renderer2, RendererFactory2} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
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
import {TokenInterceptor} from './services/interceptor.service';
import {AppGlobals} from './services/app-globals.service';
import {ContentComponent} from './app-home/content/content.component';
import {ContentProductionComponent} from './app-home/content/content-production/content-production.component';
import {AllContentComponent} from './app-home/content/all-content/all-content.component';
import {InstagramComponent} from './app-home/content/instagram/instagram.component';
import {CompanySizeService} from './services/company-size.service';
import {IndustryService} from './services/industry.service';
import {CompanyRoleService} from './services/company-role.service';
import {ModalComponent} from './modal/modal.component';
import {MyRendererService} from './services/renderer.service';
import { CalendarComponent } from './app-home/calendar/calendar.component';

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
    OverviewAnalysisComponent,
    ContentComponent,
    ContentProductionComponent,
    AllContentComponent,
    InstagramComponent,
    ModalComponent,
    CalendarComponent
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
    HttpClientModule,
    AngularFontAwesomeModule
  ],
  providers: [HeaderService, AuthService, LoggedInUserGuard, AuthGuard, FormValidation, SidenavService, AppGlobals,
    CompanySizeService, IndustryService, CompanyRoleService, ModalComponent, InstagramComponent, SidenavComponent,
    ContentComponent, MyRendererService,
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
