import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {ValidationMessagesComponent} from './validation-messages/validation-messages.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
  ],
  exports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    ValidationMessagesComponent
  ],
  providers: [
  ],
  declarations: [
    ValidationMessagesComponent
  ]
})
export class SharedModule { }
