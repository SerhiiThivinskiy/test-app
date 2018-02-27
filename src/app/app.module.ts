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
import {UserService} from './website/services/user.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IndexComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    PostsModule,
    AppRoutingModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(router: Router) {
    console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }
}
