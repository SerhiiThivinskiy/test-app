import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Post} from '../models/post';

@Injectable()
export class PostsService {
  private readonly POSTS_URL = 'https://jsonplaceholder.typicode.com/posts';
  private posts: Array<Post> = [];

  constructor(private http: HttpClient) { }

  getPosts() {
    this.http.get<Array<Post>>(this.POSTS_URL).subscribe(
      posts => {
        console.log('PostsService#getPosts post from backend: ', posts);
        this.posts.push(...posts);
        console.log('PostsService#getPosts cached posts: ', this.posts);
      }
    );
    return this.posts;
  }

  getCachedPosts(): Array<Post> {
    return this.posts;
  }

}
