import { Component, OnInit, Input } from '@angular/core';
import { LocationService } from '../location.service';

@Component({
  selector: 'app-location-details',
  templateUrl: './location-details.component.html',
  styleUrls: ['./location-details.component.css']
})
export class LocationDetailsComponent implements OnInit {

  @Input()
  loc;
  details;
  locations;
  constructor(private _locServ: LocationService) { }

  ngOnInit() {
    this._locServ.deploymentLocations(this.loc.location.deployment)
      .subscribe((data) => {
        this.locations = data;

      });
  }
  updateLocation() {
    this.loc.location.parent = this.getPath(this.loc.topParent);
    this._locServ.editLocation(this.loc.location).subscribe();
  }
  getParent(location) {
    if (!location.parent || location.parent.length === 0) {
      return '';
    }
    return location.parent[location.parent.length - 1]._id;
  }
  getPath(top) {
    let parent = [];
    this.locations.forEach((loca) => {
      if (loca._id = top) {
        parent = [];
        loca.parent.forEach((par) => {
          parent.push(par._id);
        });
        parent.push(loca._id);
      }
    });
    return parent;
  }
}
