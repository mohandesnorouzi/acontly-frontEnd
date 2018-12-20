import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import {AddProjectModalComponent} from './add-project-modal/add-project-modal.component';
import {AddSocialModalComponent} from './add-social-modal/add-social-modal.component';


@NgModule({
  declarations: [
    AddProjectModalComponent,
    AddSocialModalComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MDBBootstrapModule.forRoot()
  ],
  exports: [
    AddProjectModalComponent,
    AddSocialModalComponent,
  ],
  providers: []
})
export class ModalModule {
}
