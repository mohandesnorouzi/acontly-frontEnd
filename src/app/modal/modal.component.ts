import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {FormValidation} from '../services/form-validation.service';
import {HttpErrorResponse} from '@angular/common/http';
import {CompanySizeService} from '../services/company-size.service';
import {IndustryService} from '../services/industry.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {

  csize: Array<any>;
  allIndustry: Array<any>;


  createProjectForm: FormGroup;
  @Input() public createProjectValidationMessages = {
    'projectName': [
      {type: 'required', message: 'وارد کردن نام پروژه الزامیست!'},
    ],
    'companyName': [
      {type: 'required', message: 'وارد کردن نام شرکت الزامیست!'},
    ],
  };


  constructor(private formvalidation: FormValidation, private companysize: CompanySizeService,
              private industry: IndustryService) {
  }


  @ViewChild('projectModal') public projectModal;

  openModal() {
    // console.log(this.projectModal);
    this.projectModal.show();

    // get company size to show in drop-down list box
    this.companysize.getCompanySize().subscribe((data) => {
        if (data['ok']) {
          this.csize = data['result'];
        }
      },
      (error: HttpErrorResponse) => {
        console.log('error: ', error.message);
      });

    // get all industry to show in drop-down list box
    this.industry.getAllIndustry().subscribe((data) => {
        if (data['ok']) {
          this.allIndustry = data['result'];
        }
      },
      (error: HttpErrorResponse) => {
        console.log('error: ', error.message);
      });
  }

  onCreateProject() {
    // Create Project form setup
    // console.log(this.createProjectForm);
    const projectName = this.createProjectForm.value.projectName;
    const companyName = this.createProjectForm.value.companyName;
    const companyField = this.createProjectForm.value.companyField;
    const companySize = this.createProjectForm.value.companySize;
    // this.authService.signUpUser(email, password);
    console.log(this.createProjectForm.value);


    // this.signUpForm.reset({
    //   'email': '',
    //   'password': ''
    // });
  }


  ngOnInit() {
    // Initialize form before rendering template so i put this here in ngOnInit
    this.createProjectForm = new FormGroup({
      'projectName': new FormControl(null, Validators.required),
      'companyName': new FormControl(null, Validators.required),
      'companyField': new FormControl(null, Validators.required),
      'companySize': new FormControl(null, Validators.required),
    });
  }

}
