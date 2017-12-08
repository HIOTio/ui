import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProfileService } from '../../core/user/profile.service';
import 'rxjs/add/operator/map';

@Injectable()
export class DeploymentService {

  constructor(private _http: HttpClient, private _profile: ProfileService) { }

  getDeployments(): Observable<any> {
    return this._http.get('http://54.37.228.181/be/api/deployment_role/profile/' + this._profile.getUserId());
  }
  deploymentDetails(deploymentId): Observable<any> {
    return this._http.get('http://54.37.228.181/be/api/deployment/' + deploymentId);
  }
  deploymentUsers(deploymentId): Observable<any> {
    return this._http.get('http://54.37.228.181/be/api/deployment_role/deployment/' + deploymentId);
  }
  deploymentTypes(): Observable<any> {
    return this._http.get('http://54.37.228.181/be/api/deployment_type');
  }
  addDeployment(deployment): Observable<any> {
    return this._http.post('http://54.37.228.181/be/api/deployment', deployment );
  }
  updateDeployment(deployment): Observable<any> {
    return this._http.put('http://54.37.228.181/be/api/deployment', deployment );
  }
  addDeploymentUser(deploymentUser): Observable<any> {
    return this._http.post('http://54.37.228.181/be/api/deployment_user', deploymentUser);
  }
}
