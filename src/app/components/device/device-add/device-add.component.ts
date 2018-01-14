import { DeviceService } from '../device.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
// import { DateFormatter } from '@angular/common/src/pipes/intl';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, Inject, Input } from '@angular/core';
@Component({
  selector: 'app-device-add',
  templateUrl: './device-add.component.html',
  styleUrls: ['./device-add.component.css']
})
export class DeviceAddComponent implements OnInit {
  deploymentId='';
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.deploymentId = params['deployment'];
    });
    
  }
}
