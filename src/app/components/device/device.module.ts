import { DeviceService } from './device.service';
import { Ng4JsonEditorModule } from 'angular4-jsoneditor' ;
import { NgModule } from '@angular/core';
import {DataSource} from '@angular/cdk/collections';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule} from '../../material/material.module';
import { DeviceHomeComponent } from './device-home/device-home.component';
import { DeviceListComponent} from './device-list/device-list.component';
import { DeviceAddComponent, DialogAddComponent } from './device-add/device-add.component';
import { DeviceConfigComponent } from './device-config/device-config.component';
import { EnrolledTableComponent } from './enrolled-table/enrolled-table.component';
@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    Ng4JsonEditorModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [DeviceHomeComponent, DeviceListComponent, DeviceAddComponent, DialogAddComponent, DeviceConfigComponent, EnrolledTableComponent],
  exports: [DeviceListComponent],
  providers: [DeviceService],
  entryComponents:[DialogAddComponent]
})
export class DeviceModule { }

