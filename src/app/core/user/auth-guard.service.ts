import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(private _router: Router, private auth:AuthService) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean {
    if (this.auth.isAuthenticated()) {
      return true;
    } else {
      this._router.navigate(['accessDenied/' + state.url.replace('/','\\')]);
      return false;
    }
  }
}

