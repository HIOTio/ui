import { DeviceService } from './device.service';
import { Ng4JsonEditorModule } from 'angular4-jsoneditor' 
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule} from '../../material/material.module';
import { DeviceHomeComponent } from './device-home/device-home.component';
import { DeviceListComponent} from './device-list/device-list.component';
import { DeviceAddComponent, DialogAddComponent } from './device-add/device-add.component';
import { DeviceConfigComponent } from './device-config/device-config.component';
@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    Ng4JsonEditorModule
  ],
  declarations: [DeviceHomeComponent, DeviceListComponent, DeviceAddComponent, DialogAddComponent, DeviceConfigComponent],
  exports: [DeviceListComponent],
  providers: [DeviceService],
  entryComponents:[DialogAddComponent]
})
export class DeviceModule { }
