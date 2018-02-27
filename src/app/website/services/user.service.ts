import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  private readonly ADMIN_LOGIN = 'admin';
  private readonly ADMIN_PASSWORD = 'admin';

  constructor() { }

  isAdmin(login: string, password: string): boolean {
    return login === this.ADMIN_LOGIN && password === this.ADMIN_PASSWORD;
  }

}
