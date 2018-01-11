import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
@Injectable()
export class AggregatorService {

  constructor(private _http: HttpClient) { }
  getAggregator(agg) {
    return this._http.get(environment.services + '/api/aggregator/' + agg);

  }
  getAggregatorsForDevice(device) {
    return this._http.get(environment.services + '/api/aggregator/device/' + device);

  }
  getAggregatorsForDeployment(deployment) {
    return this._http.get(environment.services + '/api/aggregator/deployment/' + deployment);

  }
  createAggregator(aggregator) {
    return this._http.post(environment.services + '/api/aggregator', aggregator);
  }
}
