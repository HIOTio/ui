import { DeviceService } from '../device.service';
import { DateFormatter } from '@angular/common/src/pipes/intl';
<<<<<<< HEAD
import { Component, OnInit, Inject, Input } from '@angular/core';

=======
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, Inject, Input } from '@angular/core';
import {DataSource} from '@angular/cdk/collections';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
>>>>>>> master
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
<<<<<<< HEAD
=======
    console.log('opening dialog');
>>>>>>> master
    const dialogRef = this.dialog.open(DialogAddComponent, {
      width: '80%',
      data: {deploymentId: this.deployment}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}

<<<<<<< HEAD
=======

>>>>>>> master
@Component({
  selector: 'app-add-dialog',
  templateUrl: 'add-dialog.html',
})
export class DialogAddComponent implements OnInit {
<<<<<<< HEAD
=======
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
>>>>>>> master
  public device= {
    compatibility: 1,
    _id: ''
  };
  constructor(
    public dialogRef: MatDialogRef<DialogAddComponent>,
<<<<<<< HEAD
    @Inject(MAT_DIALOG_DATA) public data: any,  private _device: DeviceService) { console.log(data);
  }
  ngOnInit() {

=======
    @Inject(MAT_DIALOG_DATA) public data: any,  private _device: DeviceService, private _formBuilder: FormBuilder) { console.log(data);
  }
  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      enrolled: new FormControl()
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
>>>>>>> master
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
<<<<<<< HEAD

=======
>>>>>>> master
