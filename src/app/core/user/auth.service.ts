import { Injectable } from '@angular/core';
import { JwtHelper } from 'angular2-jwt';
@Injectable()
export class AuthService {

  loggedIn= false;
  constructor(public jwtHelper: JwtHelper) {}

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    if (token) {
      return !this.jwtHelper.isTokenExpired(token);
    }
    return false;
  }
  public getToken(): string {
    return localStorage.getItem('token');
  }
  login(username, password) {

  }
  logout() {
    this.loggedIn = false;
  }
  userStatus() {
    return this.loggedIn;
  }
}
