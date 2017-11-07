import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProfileService } from '../../core/user/profile.service';
import 'rxjs/add/operator/map';

@Injectable()
export class DeploymentService {

  constructor(private _http: HttpClient, private _profile: ProfileService) { }

  getDeployments(): Observable<any> {
    console.log(this._profile.getUserId());
    return this._http.get('http://localhost:3000/api/deployment_role/profile/' + this._profile.getUserId());
  }
  deploymentDetails(deploymentId): Observable<any> {
    return this._http.get('http://localhost:3000/api/deployment/' + deploymentId);
  }
  deploymentUsers(deploymentId): Observable<any> {
    return this._http.get('http://localhost:3000/api/deployment_role/deployment/' + deploymentId);
  }
}
