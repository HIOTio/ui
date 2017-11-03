import { Component, OnInit } from '@angular/core';

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
  newUser= {

  };
  constructor() { }
  login() {
    console.log(this.user);
  }
  ngOnInit() {
  }

}
