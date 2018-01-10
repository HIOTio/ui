import { Component, OnInit, Input } from '@angular/core';
import { LocationService } from '../location.service';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-locations-tree',
  templateUrl: './locations-tree.component.html',
  styleUrls: ['./locations-tree.component.css']
})
export class LocationsTreeComponent implements OnInit {

  constructor(private _locService: LocationService) { }
  @Input()
  deployment;
  locations: any;
  details = {
    show: false,
    location: {},
    topParent: ''
  };
  ngOnInit() {
    this._locService.deploymentLocations(this.deployment)
      .subscribe((data) => {
        this.locations = data;

      });
  }
  showDetail(location) {
    console.log(location);
    this.details.show = true;
    this.details.location = location;
    this.details.topParent = this.getParent(location);
  }
  getParent(location) {
    if (!location.parent) {
      return '';
    }
    return location.parent[location.parent.length - 1]._id;
  }
}
