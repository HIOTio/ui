import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProfileService } from '../../core/user/profile.service';
import { environment } from '../../../environments/environment';
import 'rxjs/add/operator/map';

@Injectable()
export class DeploymentService {

  constructor(private _http: HttpClient, private _profile: ProfileService) { }

  getDeployments(): Observable<any> {
    return this._http.get(environment.services = '/api/deployment_role/profile/' + this._profile.getUserId());
  }
  deploymentDetails(deploymentId): Observable<any> {
    return this._http.get(environment.services = '/api/deployment/' + deploymentId);
  }
  deploymentUsers(deploymentId): Observable<any> {
    return this._http.get(environment.services = '/api/deployment_role/deployment/' + deploymentId);
  }
  deploymentTypes(): Observable<any> {
    return this._http.get(environment.services = '/api/deployment_type');
  }
  addDeployment(deployment): Observable<any> {
    return this._http.post(environment.services = '/api/deployment', deployment);
  }
  updateDeployment(deployment): Observable<any> {
    return this._http.put(environment.services = '/api/deployment', deployment);
  }
  addDeploymentUser(deploymentUser): Observable<any> {
    return this._http.post(environment.services = '/api/deployment_user', deploymentUser);
  }
}
