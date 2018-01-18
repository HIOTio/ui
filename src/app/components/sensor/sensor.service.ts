import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { environment } from '../../../environments/environment';



@Injectable()
export class SensorService {

  constructor(private _http: HttpClient) { }
  deploymentSensors(deployment){
    return this._http.get(environment.services + '/api/sensor/deployment/'+ deployment);
  }
}
