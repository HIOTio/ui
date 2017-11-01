import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  loggedIn= false;
  constructor() { }
  login(username, password) {

  }
  logout() {
    this.loggedIn = false;
  }
  userStatus() {
    return this.loggedIn;
  }
}
