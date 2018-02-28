import {Injectable} from '@angular/core';
import {CanLoad, Route, Router} from '@angular/router';
import {UserService} from './user.service';

@Injectable()
export class AdminGuardService implements CanLoad {

  constructor(private router: Router, private userService: UserService) {
  }

  canLoad(route: Route): boolean {
    let isAdmin: boolean = this.userService.isAdmin();
    if (!isAdmin) {
      this.router.navigate(['login'], { queryParams: { returnUrl: route.path }});
    }
    return isAdmin;
  }
}
