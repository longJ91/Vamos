import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { LoginPageService } from './login-page.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  public email: string;
  public pwd: string;

  constructor(
    private route: ActivatedRoute,
    private loginPageService: LoginPageService
  ) {
    this.email = '';
    this.pwd = '';
  }

  ngOnInit() {
  }

  signIn() {
    if (!this.email || !this.pwd) {
      console.log('1234');
      return false;
    } else {
      return this.loginPageService.getLogin(this.email, this.pwd).subscribe(data => console.log(data));
    }
  }

  // signUpPage() {
  //   this.route.
  // }
}
