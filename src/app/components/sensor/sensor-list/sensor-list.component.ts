import { Component, OnInit, Input } from '@angular/core';
import { SensorService } from '../sensor.service';
@Component({
  selector: 'app-sensor-list',
  templateUrl: './sensor-list.component.html',
  styleUrls: ['./sensor-list.component.css']
})
export class SensorListComponent implements OnInit {
  sensors: any;
  @Input()
  deployment;
  @Input()
  device;
  constructor(private _sensorServ: SensorService) { }

  ngOnInit() {
    if (this.device) {
      this._sensorServ.deviceSensors(this.device)
        .subscribe((data) => {
          this.sensors = data;
          console.log(data);
        });
    } else {
      this._sensorServ.deploymentSensors(this.deployment)
        .subscribe((data) => {
          this.sensors = data;
          console.log(data);
        });
    }
  }

}
