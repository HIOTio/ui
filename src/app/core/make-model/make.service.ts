import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable()
export class MakeService {

  constructor(private _http: HttpClient) { }
  getMakes() {
    return this._http.get(environment.services + '/api/device_make');
  }
}
