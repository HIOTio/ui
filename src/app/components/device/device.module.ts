import { DeviceService } from './device.service';
<<<<<<< HEAD
import { Ng4JsonEditorModule } from 'angular4-jsoneditor' 
=======
import { Ng4JsonEditorModule } from 'angular4-jsoneditor' ;
>>>>>>> master
import { NgModule } from '@angular/core';
import {DataSource} from '@angular/cdk/collections';
import { CommonModule } from '@angular/common';
<<<<<<< HEAD
=======
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
>>>>>>> master
import { MaterialModule} from '../../material/material.module';
import { DeviceHomeComponent } from './device-home/device-home.component';
import { DeviceListComponent} from './device-list/device-list.component';
import { DeviceAddComponent, DialogAddComponent } from './device-add/device-add.component';
import { DeviceConfigComponent } from './device-config/device-config.component';
<<<<<<< HEAD
=======
import { EnrolledTableComponent } from './enrolled-table/enrolled-table.component';
>>>>>>> master
@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
<<<<<<< HEAD
    Ng4JsonEditorModule
  ],
  declarations: [DeviceHomeComponent, DeviceListComponent, DeviceAddComponent, DialogAddComponent, DeviceConfigComponent],
=======
    Ng4JsonEditorModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [DeviceHomeComponent, DeviceListComponent, DeviceAddComponent, DialogAddComponent, DeviceConfigComponent, EnrolledTableComponent],
>>>>>>> master
  exports: [DeviceListComponent],
  providers: [DeviceService],
  entryComponents:[DialogAddComponent]
})
export class DeviceModule { }
