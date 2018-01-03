import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { AuthService } from '../user/auth.service';

@Injectable()
export class UserMenuService {
  constructor(private _auth: AuthService) {
  }
  myMenuItems(auth) {
    this._auth.isAuthenticated().subscribe(
      // data => console.log(data)
    );
    if (auth.loggedIn) {
      return [
        { link: '/deployment', title: 'Deployments' },
        { link: '/reports', title: 'Reports' },
        { link: '/aggregator', title: 'Aggregators' },
        { link: '/dashboard', title: 'Dashboard' },
        { link: '/health', title: 'Health & Status' },
        { link: '/control-centre', title: 'Control Centre' },
        { link: '/settings', title: 'Settings' }
      ];
    } else {
      return [];
    }
  }
}
