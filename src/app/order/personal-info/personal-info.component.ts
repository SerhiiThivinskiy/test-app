import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss']
})
export class PersonalInfoComponent implements OnInit {
  form: FormGroup;
  countries = ['Ukraine', 'USA'];

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.buildForm();
    this.form.valueChanges.subscribe(data => {
      console.log('valueChanges data ' , data);
      this.checkForErrors();
    });
  }

  submitForm() {
    if (this.form.valid) {
      console.log('OK');
    } else {
      console.log('wrong data ', this.form.value);
    }
  }

  private buildForm() {
    this.form = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      country: ['', Validators.required],
      street: ['', Validators.required],
      city: ['', Validators.required],
      state: '',
      zip: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ''
    });
  }

  checkForErrors() {
    for (const field in this.formErrors) {
      this.validateField(field);
    }
  }

  validateField(controlName) {
    const control = this.form.get(controlName);
    this.formErrors[controlName] = [];

    if (control.touched && !control.valid) {
      const messages = this.validationMessages[controlName];
      Object.keys(control.errors).forEach(
        error => this.formErrors[controlName].push(messages[error])
      );
    }
  }

  isValid(controlName) {
    const control = this.form.get(controlName);
    return control.touched && !this.formErrors[controlName].length;
  }

  isInvalid(controlName) {
    const control = this.form.get(controlName);
    return control.touched && this.formErrors[controlName].length;
  }

  formErrors = {
    firstName: [],
    lastName: [],
    country: [],
    street: [],
    city: [],
    zip: [],
    email: []
  };

  validationMessages = {
    firstName: {
      required: 'Name can not be empty'
    },
    lastName: {
      required: 'Last name can not be empty'
    },
    country: {
      required: 'Country can not be empty'
    },
    street: {
      required: 'Street can not be empty'
    },
    city: {
      required: 'City can not be empty'
    },
    zip: {
      required: 'Zip code can not be empty'
    },
    email: {
      required: 'Email can not be empty',
      email: 'Wrong format'
    }
  };

}
