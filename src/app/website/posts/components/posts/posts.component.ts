import { Component, OnInit } from '@angular/core';
import {PostsService} from '../../../services/posts.service';
import {Post} from '../../../models/post';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts$: Observable<Array<Post>>;

  constructor(private postsService: PostsService) { }

  ngOnInit() {
    this.posts$ = this.postsService.getPosts();
  }
}
