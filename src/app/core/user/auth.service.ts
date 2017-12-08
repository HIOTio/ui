import { DeploymentService } from '../../components/deployment/deployment.service';
import { UpdatesService } from '../../updates.service';
import { tokenize } from '@angular/compiler/src/ml_parser/lexer';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs/Observable';
import { Router} from '@angular/router';
import { JwtHelper } from 'angular2-jwt';
import { Http } from '@angular/http';
import {ProfileService } from './profile.service';
@Injectable()
export class AuthService {
subscriptions=[];
  authStatus= {
    loggedIn: false,
    errorMsg: ''
  };
  constructor(public jwtHelper: JwtHelper,
    private http: Http,
    private _router: Router,
    private _profile: ProfileService,
    private _deployments: DeploymentService,
    private _updatesService: UpdatesService
  ) {
    const token = localStorage.getItem('token');
    this.authStatus.loggedIn = false;
    if ( token ) {
      if ( !this.jwtHelper.isTokenExpired(token)) {
        this.authStatus.loggedIn = true;
        this.getUserDetails (token);
        this.subscribeToChannels();
      }
    }
  }
  private subscribeToChannels() {
    this._deployments.getDeployments()
    .subscribe(data => {
      data.forEach(channel => {
        this._updatesService.connect('ws://54.37.228.181/be/deployment_' + channel.deployment._id);
      });
    });
  }
  private getUserDetails(token){
    this._profile.setUser(this.jwtHelper.decodeToken(token).id);

  }
  public isAuthenticated() {
    return this.authStatus;
  }
  public getToken(): string {
    return localStorage.getItem('token');
  }
  login(username, password, route): any {
    if (route === '') {
      route = '/';
    }
    route.replace('\\', '/');
      this.http.post('http://54.37.228.181/be/auth', {username: username, password: password})
      .map(res => res.json())
      .subscribe(
        data => {
          localStorage.setItem('token', data.token);
          if (data.success) {
            console.log(data);
            this.authStatus.loggedIn = true;
            this.authStatus.errorMsg = '';
            this._router.navigate([route]);
            this.getUserDetails(data.token);
          }
          return this.authStatus;
        },
        error => {
          this.authStatus.loggedIn = false;
          this.authStatus.errorMsg = 'Invalid user or password';
          return this.authStatus;
        }
      );
  }
  logout() {
    this.authStatus.loggedIn = false;
    localStorage.removeItem('token');
  }
  userStatus() {
    return this.authStatus.loggedIn;
  }
}
