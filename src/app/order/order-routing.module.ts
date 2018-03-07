import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {PersonalInfoComponent} from './personal-info/personal-info.component';

const orderRoutes: Routes = [
  {
    path: '', component: PersonalInfoComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(orderRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class OrderRoutingModule {
}
