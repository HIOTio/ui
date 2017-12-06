import { DeviceService } from '../device.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-device-list',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.css']
})
export class DeviceListComponent implements OnInit {
  devices=[];
  constructor(private _devices: DeviceService) { }
  @Input() deploymentId = '';
  ngOnInit() {
    this._devices.resetDeployment(this.deploymentId);
    this._devices.getDevices()
    .subscribe(data => this.devices=data);
  }

}
