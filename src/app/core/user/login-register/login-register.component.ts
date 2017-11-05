import { Component, OnInit } from '@angular/core';
import { AuthService} from '../auth.service';
@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.css']
})
export class LoginRegisterComponent implements OnInit {
  user= {
    username : '',
    password : ''
  };
  loginStatus={
    errroMsg: '',
    loggedIn: false
  };
  newUser= {

  };
  constructor(private _auth: AuthService) { }
  login() {
    this.loginStatus = this._auth.login(this.user.username, this.user.password, '');
  }
  ngOnInit() {
  }

}
