import {Component, Input, OnDestroy, OnInit, Renderer2} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';
import {FormValidation} from '../../services/form-validation.service';
import {CompanySizeService} from '../../services/company-size.service';
import {HttpErrorResponse} from '@angular/common/http';
import {IndustryService} from '../../services/industry.service';
import {CompanyRoleService} from '../../services/company-role.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit, OnDestroy {

  csize: Array<any>;
  allIndustry: Array<any>;
  companyRole: Array<any>;


  signUpForm: FormGroup;
  @Input() public signupValidationMessages = {
    'firstName': [
      {type: 'required', message: 'وارد کردن نام الزامی است!'},
    ],
    'lastName': [
      {type: 'required', message: 'وارد کردن نام خانوادگی الزامیست!'},
    ],
    'companyName': [
      {type: 'required', message: 'وارد کردن نام شرکت الزامیست!'},
    ],
    'companySize': [
      {type: 'required', message: 'وارد کردن تعداد اعضای مجموعه الزامیست!'},
    ],
    'companyField': [
      {type: 'required', message: 'وارد کردن حوزه فعالیت شرکت الزامیست!'},
    ],
    'jobPosition': [
      {type: 'required', message: 'وارد کردن سمت الزامیست!'},
    ],
    'email': [
      {type: 'required', message: 'وارد کردن ایمیل الزامیست!'},
      {type: 'email', message: 'لطفا یک ایمیل معتبر وارد کنید!'}
    ],
    'password': [
      {type: 'required', message: 'وارد کردن رمز ورود الزامیست!'},
      {type: 'minlength', message: 'رمز عبور حداقل باید 8 کاراکتر باشد'},
      {type: 'pattern', message: 'Your password must contain at least one uppercase, one lowercase, and one number'}
    ]
  };

  constructor(private renderer: Renderer2, private router: Router, private authService: AuthService,
              private formvalidation: FormValidation, private companysize: CompanySizeService,
              private industry: IndustryService, private roles: CompanyRoleService) {
    this.renderer.setStyle(document.body, 'background-color', '#E7fff4');
  }

  ngOnInit() {
    // Initialize form before rendering template so i put this here in ngOnInit
    this.signUpForm = new FormGroup({
      'firstName': new FormControl(null, Validators.required),
      'lastName': new FormControl(null, Validators.required),
      'companyName': new FormControl(null, Validators.required),
      'companySize': new FormControl(null, Validators.required),
      'companyField': new FormControl(null, Validators.required),
      'jobPosition': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [
        Validators.minLength(8),
        Validators.required, this.formvalidation.lowerCaseValidator,
        this.formvalidation.upperCaseValidator, this.formvalidation.numberValidator])
    });

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

    // get all roles in company to show in drop-down list box
    this.roles.getAllRoles().subscribe((data) => {
        console.log(data);
        if (data['ok']) {
          this.companyRole = data['result'];
        }
      },
      (error: HttpErrorResponse) => {
        console.log('error: ', error.message);
      });

  }


  // Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
  onSignUp() {
    // Sign-up form setup
    console.log(this.signUpForm);
    const firstName = this.signUpForm.value.firstName;
    const lastName = this.signUpForm.value.lastName;
    const companyName = this.signUpForm.value.companyName;
    const companySize = this.signUpForm.value.companySize;
    const companyField = this.signUpForm.value.companyField;
    const jobPosition = this.signUpForm.value.jobPosition;
    const email = this.signUpForm.value.email;
    const password = this.signUpForm.value.password;
    // this.authService.signUpUser(email, password);
    console.log(this.signUpForm.value);


    // this.signUpForm.reset({
    //   'email': '',
    //   'password': ''
    // });
  }

  ngOnDestroy() {
    this.renderer.removeStyle(document.body, 'background-color');
  }

}
