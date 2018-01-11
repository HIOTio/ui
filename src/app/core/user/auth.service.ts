import { BehaviorSubject } from 'rxjs/Rx';
import { DeploymentService } from '../../components/deployment/deployment.service';
import { UpdatesService } from '../../updates.service';
import { tokenize } from '@angular/compiler/src/ml_parser/lexer';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { JwtHelper } from 'angular2-jwt';
import { Http } from '@angular/http';
import { ProfileService } from './profile.service';
import { environment } from '../../../environments/environment';
@Injectable()
export class AuthService {
  subscriptions = [];
  authStatus = new BehaviorSubject({
    loggedIn: false,
    errorMsg: ''
  });
  constructor(public jwtHelper: JwtHelper,
    private http: Http,
    private _router: Router,
    private _profile: ProfileService,
    private _deployments: DeploymentService,
    private _updatesService: UpdatesService
  ) {
    const token = localStorage.getItem('token');
    this.authStatus.next({
      loggedIn: false,
      errorMsg: ''
    });
    if (token) {
      if (!this.jwtHelper.isTokenExpired(token)) {
        this.authStatus.next({
          loggedIn: true,
          errorMsg: ''
        });
        this.getUserDetails(token);
        this.subscribeToChannels();
      }
    }
  }
  private subscribeToChannels() {
    this._deployments.getDeployments()
      .subscribe(data => {
        data.forEach(channel => {
          this._updatesService.connect(environment.wservice + '/deployment_' + channel.deployment._id);
        });
      });
  }
  private getUserDetails(token) {
    this._profile.setUser(this.jwtHelper.decodeToken(token).id);

  }
  public amILoggedIn() {
    return this.authStatus.getValue();
  }

  public isAuthenticated(): Observable<any> {
    return this.authStatus;
  }
  public getToken(): string {
    return localStorage.getItem('token');
  }
  login(username, password, route): any {
    if (route === '') {
      route = '/dashboard';
    }
    route.replace('\\', '/');
    this.http.post(environment.services + '/auth', { username: username, password: password })
      .map(res => res.json())
      .subscribe(
      data => {
        localStorage.setItem('token', data.token);
        if (data.success) {
          console.log(data);

          this.authStatus.next({
            loggedIn: true,
            errorMsg: ''
          });
          this._router.navigate([route]);
          this.getUserDetails(data.token);
        }
        return this.authStatus;
      },
      error => {
        this.authStatus.next({
          loggedIn: false,
          errorMsg: 'Invalid user or password'
        });
        return this.authStatus;
      }
      );
  }
  logout() {
    this.authStatus.next({
      loggedIn: false,
      errorMsg: ''
    })
    localStorage.removeItem('token');
    this._router.navigate(['/']);
  }
  userStatus() {
    return this.authStatus;
  }
}
