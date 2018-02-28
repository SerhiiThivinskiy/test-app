import { Injectable } from '@angular/core';
import {User} from '../models/user';

@Injectable()
export class UserService {
  private readonly ADMIN_LOGIN = 'admin';
  private readonly ADMIN_PASSWORD = 'admin';
  private currentUser: User;

  constructor() {
    console.log('UserService created ');
  }

  login(login: string, password: string) {
    this.currentUser = new User(login, password);
  }

  logout() {
    this.currentUser = null;
  }

  isAdmin(): boolean {
    return this.currentUser != null &&
      this.currentUser.login === this.ADMIN_LOGIN &&
      this.currentUser.password === this.ADMIN_PASSWORD;
  }

}
