import {Component, Input, OnDestroy, OnInit, Output, Renderer2} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';
import {FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import {HttpErrorResponse, HttpResponse} from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  public isUserLogin: boolean;

  loginForm: FormGroup;
  public loginValidationMessages = {
    'email': [
      {type: 'required', message: 'وارد کردن ایمیل الزامیست!'},
      {type: 'email', message: 'لطفا یک ایمیل معتبر وارد کنید!'}
    ],
    'password': [
      {type: 'required', message: 'وارد کردن رمز ورود الزامیست!'},
    ]
  };

  constructor(private renderer: Renderer2, private router: Router, private authService: AuthService) {
    this.renderer.setStyle(document.body, 'background-color', '#E7fff4');

    // if (authService.isAuthenticated()) {
    //   this.router.navigate(['/overview']);
    // }
  }

  ngOnInit() {
    // Initialize form before rendering template so i put this here in ngOnInit
    this.loginForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, Validators.required)
    });
  }

  onLoginSubmit() {
    // Login form setup
    const email = this.loginForm.value.email;
    const password = this.loginForm.value.password;
    this.authService.loginUser(email, password).subscribe((data) => {
        console.log(data);
        if (data['ok']) {
          const token = data['result']['token'];
          localStorage.setItem('token', token);
          this.authService.isUserLogin(true);
          this.router.navigate(['/overview']);
          console.log(token);
        }
      },
      (error: HttpErrorResponse) => {
        console.log('error: ', error.message);
      });

    // this.authService.checkTokenValidation();

    this.loginForm.reset({
      'email': '',
      'password': ''
    });
  }


  ngOnDestroy() {
    this.renderer.removeStyle(document.body, 'background-color');
    // this.observer.unsubscribe();
  }
}
