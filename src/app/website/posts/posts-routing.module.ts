import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PostsComponent} from './components/posts/posts.component';

const postsRoutes: Routes = [
  {
    path: 'posts', component: PostsComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(postsRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class PostsRoutingModule {
}
