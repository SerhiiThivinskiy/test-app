import {Injectable} from '@angular/core';
import {Post} from '../models/post';
import {ApiService} from '../../shared/services/api.service';
import {Observable} from 'rxjs/Observable';
import {take} from 'rxjs/operators';

@Injectable()
export class PostsService extends ApiService {
  private readonly POSTS_URL = '/posts';

  getPosts(): Observable<Array<Post>> {
    return this.get<Array<Post>>(this.POSTS_URL);
  }
}
