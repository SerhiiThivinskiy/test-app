import {RequestOptions} from '../models/request-options';
import {HttpHeaders} from '@angular/common/http/src/headers';
import {HttpParams} from '@angular/common/http/src/params';

export class RequestOptionsBuilder {
  private options: RequestOptions = new RequestOptions();

  addHeaders(headers: HttpHeaders) {
    this.options.headers = headers;
    return this;
  }

  addParams(params: HttpParams) {
    this.options.params = params;
    return this;
  }

  build(): RequestOptions {
    return this.options;
  }
}
