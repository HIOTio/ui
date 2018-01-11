import { Component, OnInit, Input, Output } from '@angular/core';
import { LocationService } from '../location.service';

@Component({
  selector: 'app-locations-list-select',
  templateUrl: './locations-list-select.component.html',
  styleUrls: ['./locations-list-select.component.css']
})
export class LocationsListSelectComponent implements OnInit {
  @Input() @Output()
  location;
  @Input()
  deployment;
  locations: any;
  constructor(private _locServ: LocationService) { }

  ngOnInit() {
    this._locServ.deploymentLocations(this.deployment)
      .subscribe((data) => {
        this.locations = data;
      });

  }

}
