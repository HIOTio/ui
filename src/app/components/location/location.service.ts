import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable()
export class LocationService {

  constructor(private _http: HttpClient) { }

  deploymentLocations(deployment) {
    return this._http.get(environment.services + '/api/location/deployment/' + deployment);
  }
  newLocation(location) {
    return this._http.post(environment.services + '/api/location/', location);
  }
  editLocation(location) {

    return this._http.put(environment.services + '/api/location/', location);
  }
  deleteLocation(location) {
    return this._http.delete(environment.services + '/api/location/', location);

  }
  locationDetails(location) {
    return this._http.get(environment.services + '/api/location/' + location);

  }


}
