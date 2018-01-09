import { Component, OnInit, ViewChild, Input, Output } from '@angular/core';
import { DeviceService } from '../device.service';
@Component({
  selector: 'app-device-config',
  templateUrl: './device-config.component.html',
  styleUrls: ['./device-config.component.css']
})
export class DeviceConfigComponent implements OnInit {
  @Input() @Output() data;
  constructor(private _device: DeviceService) { }

  ngOnInit() {
  }

}

