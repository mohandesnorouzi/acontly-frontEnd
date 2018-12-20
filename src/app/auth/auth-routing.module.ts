import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoggedInUserGuard} from '../services/auth-guard.service';

const authRoutes: Routes = [
  {
    path: 'login', loadChildren: './login/login.module#LoginModule', canActivate: [LoggedInUserGuard]
  },
  {
    path: 'sign-up', loadChildren: './sign-up/sign-up.module#SignUpModule', canActivate: [LoggedInUserGuard]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(authRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AuthRoutingModule {
}
