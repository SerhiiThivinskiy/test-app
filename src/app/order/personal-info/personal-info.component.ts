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
  }

}
