import { DeviceService } from '../device.service';
import { DateFormatter } from '@angular/common/src/pipes/intl';
import { Component, OnInit, Inject, Input } from '@angular/core';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
@Component({
  selector: 'app-device-add',
  templateUrl: './device-add.component.html',
  styleUrls: ['./device-add.component.css']
})
export class DeviceAddComponent implements OnInit {
  @Input() deployment= '';
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  showDialog(deployment): void {
    const dialogRef = this.dialog.open(DialogAddComponent, {
      width: '80%',
      data: {deploymentId: this.deployment}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}

@Component({
  selector: 'app-add-dialog',
  templateUrl: 'add-dialog.html',
})
export class DialogAddComponent implements OnInit {
  public device= {
    compatibility: 1,
    _id: ''
  };
  constructor(
    public dialogRef: MatDialogRef<DialogAddComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,  private _device: DeviceService) { console.log(data);
  }
  ngOnInit() {

  }


  findDevice() {
    this.device._id = 'you clicked search';
  }
  compatLvl() {
    if (this.device.compatibility === 1) {
      return 'Supports MQTT';
    }else if (this.device.compatibility === 2) {
      return 'Supports HIOT Message Structure';
    }else if (this.device.compatibility === 3) {
      return 'Fully Compatible';
    }else if (this.device.compatibility === 4) {
      return'HIOT Certified';
    }
    return 'Unknown';
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}

