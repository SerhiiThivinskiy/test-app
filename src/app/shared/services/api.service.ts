import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Injectable} from '@angular/core';
import {delay} from 'rxjs/operators';
import {RequestOptions} from '../../website/models/request-options';

@Injectable()
export abstract class ApiService {

  constructor(private httpClient: HttpClient) {
  }

  get<T>(url: string): Observable<T> {
    return this.httpClient.get<T>(this.getUri(url));
  }

  post(url: string, body: any, options?: RequestOptions) {
    return this.httpClient.post(this.getUri(url), body, options);
  }

  put(url: string, body: any, options?: RequestOptions) {
    return this.httpClient.put(this.getUri(url), body, options);
  }

  patch(url: string, body: any, options?: RequestOptions) {
    return this.httpClient.patch(this.getUri(url), body, options);
  }

  delete(url: string, options?: RequestOptions) {
    return this.httpClient.delete(this.getUri(url), options);
  }

  private getUri(url: string): string {
    return environment.apiUrl.replace(/\/$/, '') + url;
  }
}

