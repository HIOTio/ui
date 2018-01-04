import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.css']
})
export class LoginRegisterComponent implements OnInit {
  user = {
    username: '',
    password: ''
  };
  loginStatus = {
    errorMsg: '',
    loggedIn: false
  };
  newUser = {

  };
  constructor(private _auth: AuthService) { }
  login() {
    this._auth.login(this.user.username, this.user.password, '');
  }
  ngOnInit() {
    this._auth.isAuthenticated().subscribe(data => this.loginStatus=data);
  }

}
