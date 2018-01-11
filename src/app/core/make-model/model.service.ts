import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable()
export class ModelService {

  constructor(private _http: HttpClient) { }
  getModels(make) {
    console.log(make);
    return this._http.get(environment.services + '/api/device_model/make/' + make);
  }
}
