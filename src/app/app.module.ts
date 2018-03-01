import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {PostsModule} from './website/posts/posts.module';
import {Router} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { HeaderComponent } from './website/components/header/header.component';
import { IndexComponent } from './website/components/index/index.component';
import { LoginComponent } from './website/components/login/login.component';
import {ReactiveFormsModule} from '@angular/forms';
import {AdminGuardService} from './website/services/admin-guard.service';
import {SharedModule} from './shared/shared.module';
import {UserService} from './website/services/user.service';
import { HeroComponent } from './website/components/hero/hero.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IndexComponent,
    LoginComponent,
    HeroComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
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
