import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import {IndexComponent} from './core/index/index.component';
import {LoginComponent} from './core/login/login.component';
import {AdminGuardService} from './website/services/admin-guard.service';

const appRoutes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin', canLoad: [AdminGuardService], loadChildren: 'app/admin/admin.module#AdminModule' },
  { path: 'order', loadChildren: 'app/order/order.module#OrderModule' },
  { path: '**', redirectTo: 'posts' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
