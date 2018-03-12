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
  }

  submitForm() {
    this.validateForm();
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
      state: ['', Validators.required],
      zip: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required]
    });
    this.form.valueChanges
      .subscribe(data => this.checkForErrors());
  }

  checkForErrors() {
    for (const field in this.formErrors) {
      this.formErrors[field] = '';
      const control = this.form.get(field);
      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        this.formErrors[field] = messages[Object.keys(control.errors)[0]];
      }
    }
  }

  validateForm() {
    for (const field in this.formErrors) {
      this.formErrors[field] = '';
      const control = this.form.get(field);
      if (control && !control.valid) {
        const messages = this.validationMessages[field];
        this.formErrors[field] = messages[Object.keys(control.errors)[0]];
      }
    }
  }

  formErrors = {
    firstName: '',
    lastName: '',
    country: '',
    street: '',
    city: '',
    zip: '',
    email: ''
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
      required: 'Email can not be empty'
    }
  };

}
