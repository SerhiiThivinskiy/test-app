import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminRoutingModule} from './admin-routing.module';
import {AdminComponent} from './components/admin/admin.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  declarations: [
    AdminComponent
  ],
  providers: [
  ]
})
export class AdminModule {
}
