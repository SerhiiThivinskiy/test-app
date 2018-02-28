import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import {IndexComponent} from './website/components/index/index.component';
import {LoginComponent} from './website/components/login/login.component';
import {AdminGuardService} from './website/services/admin-guard.service';

const appRoutes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin', canLoad: [AdminGuardService], loadChildren: 'app/admin/admin.module#AdminModule' },
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
