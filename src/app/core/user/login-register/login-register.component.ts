import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { ProfileService } from '../profile.service';
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
    firstname: '',
    lastname: '',
    email: '',
    password: ''
  };
  passwordConfirm: '';
  constructor(private _auth: AuthService, private _profile: ProfileService) { }
  login() {
    this._auth.login(this.user.username, this.user.password, '');
  }
  ngOnInit() {
    this._auth.isAuthenticated().subscribe(data => this.loginStatus = data);
  }
  regUser() {
    // perform a load of checks first
    this._profile.register(this.newUser.firstname, this.newUser.lastname, this.newUser.password, this.newUser.email)

  }
}
