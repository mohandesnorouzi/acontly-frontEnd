import {FormControl} from '@angular/forms';

export class FormValidation {

  constructor() {
  }

  // --Create some custom validation--
  lowerCaseValidator(control: FormControl): { [key: string]: boolean } | null {
    const regex = /[a-z]/g;
    if (regex.test(control.value)) {
      return null;
    } else {
      return {lowercase: true};
    }
  }

  upperCaseValidator(control: FormControl): { [key: string]: boolean } | null {
    const regex = /[A-Z]/g;
    if (regex.test(control.value)) {
      return null;
    } else {
      return {uppercase: true};
    }
  }

  numberValidator(control: FormControl): { [key: string]: boolean } | null {
    const regex = /[0-9]/g;
    if (regex.test(control.value)) {
      return null;
    } else {
      return {numbercase: true};
    }
  }
}
