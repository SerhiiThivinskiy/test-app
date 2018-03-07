import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {PostsModule} from './website/posts/posts.module';
import {Router} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {AdminGuardService} from './website/services/admin-guard.service';
import {SharedModule} from './shared/shared.module';
import {UserService} from './website/services/user.service';
import {CoreModule} from './core/core.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CoreModule,
    SharedModule,
    PostsModule,
    AppRoutingModule
  ],
  providers: [
    UserService,
    AdminGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(router: Router) {
    console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }
}
