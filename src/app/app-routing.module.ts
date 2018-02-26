import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import {IndexComponent} from './components/index/index.component';

const appRoutes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'admin', loadChildren: 'app/modules/admin/admin.module#AdminModule' },
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
