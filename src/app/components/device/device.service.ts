import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpClientModule } from '@angular/common/http';
@Injectable()
export class DeviceService {
  public device: Observable<any>;
  deployment = '';
  constructor(private _http: HttpClient) {
  }
  getDevices(): Observable<any> {
    return this._http.get('http://localhost:3000/api/device/deployment/' + this.deployment);
  }
  resetDeployment(deployment: string): void {
    this.deployment = deployment;
  }
  newDevice(){
    return this.device;
  }
}
