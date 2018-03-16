import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../website/services/user.service';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {filter, pairwise} from 'rxjs/operators';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  redirectUrl: string;

  constructor(private fb: FormBuilder,
              private userService: UserService,
              private route: ActivatedRoute,
              private router: Router) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      pairwise()
    ).subscribe((e) => {
      console.log('router.events ', e);
    });
  }

  ngOnInit() {
    this.buildForm();
    this.redirectUrl = this.route.snapshot.queryParams['returnUrl'] || 'posts';
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.userService.login(this.loginForm.value.login, this.loginForm.value.password);
      this.router.navigate([this.redirectUrl]);
    } else {
      console.log('wrong data ', this.loginForm.value);
    }
  }

  private buildForm() {
    this.loginForm = this.fb.group({
      login: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

}
