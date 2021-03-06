import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PostsComponent} from './posts/posts.component';
import {PostComponent} from './post/post.component';
import {PostsRoutingModule} from './posts-routing.module';
import {PostsService} from '../services/posts.service';

@NgModule({
  imports: [
    CommonModule,
    PostsRoutingModule
  ],
  declarations: [
    PostsComponent,
    PostComponent
  ],
  providers: [
    PostsService
  ]
})
export class PostsModule {
}
