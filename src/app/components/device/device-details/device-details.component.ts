import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { DeviceService } from '../device.service';
import { CompatibilityService } from '../../../core/compatibility.service';
@Component({
  selector: 'app-device-details',
  templateUrl: './device-details.component.html',
  styleUrls: ['./device-details.component.css']
})
export class DeviceDetailsComponent implements OnInit {
  deploymentId = '';
  deviceId = '';
  device: any;
  make = 0;
  model = 0;
  compat = [];
  roID = true;
  constructor(private activatedRoute: ActivatedRoute, private _devServ: DeviceService, private _compatServ: CompatibilityService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.deploymentId = params['deployment'];
      this.deviceId = params['id'];
      this.compat = this._compatServ.compatLevels();
      console.log(this.compat);
      this._devServ.deviceDetails(this.deviceId)
        .subscribe((data) => {
          this.device = data[0];
          console.log(this.device);
        });
    });
  }
  updateDeviceID() {
    this.roID = true;
  }

}
