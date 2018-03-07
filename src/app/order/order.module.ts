import { NgModule } from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import {OrderRoutingModule} from './order-routing.module';

@NgModule({
  imports: [
    SharedModule,
    OrderRoutingModule
  ],
  declarations: [PersonalInfoComponent]
})
export class OrderModule { }
