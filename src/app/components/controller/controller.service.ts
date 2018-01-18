import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
@Injectable()
export class ControllerService {

  constructor(private _http: HttpClient) { }

  deploymentController(deploymentId) {
    return this._http.get(environment.services + '/api/controller/deployment/' + deploymentId);
  }
}
