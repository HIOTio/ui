import { DeviceService } from './device.service';
import { NgModule } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../material/material.module';
import { DeviceHomeComponent } from './device-home/device-home.component';
import { DeviceListComponent } from './device-list/device-list.component';
import { DeviceAddComponent } from './device-add/device-add.component';
import { DeviceConfigComponent } from './device-config/device-config.component';
import { EnrolledTableComponent } from './enrolled-table/enrolled-table.component';
import { DeviceDetailsComponent } from './device-details/device-details.component';
import { RouterModule } from '@angular/router';
import { AuthGuardService } from '../../core/user/auth-guard.service';
import { CompatibilityService } from '../../core/compatibility.service';
import { MakeModelModule } from '../../core/make-model/make-model.module';
import { LocationModule } from '../location/location.module';
import { AccordionModule } from 'ngx-bootstrap';
import { AggregatorModule } from '../aggregator/aggregator.module';
import { SensorModule } from '../sensor/sensor.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    MakeModelModule,
    LocationModule,
    AggregatorModule,
    SensorModule,
    AccordionModule.forRoot(),
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: 'device/add/:deployment', component: DeviceAddComponent, data: { state: 'deployment' }, canActivate: [AuthGuardService] },
      { path: 'device/:deployment/:id', component: DeviceDetailsComponent, data: { state: 'deployment' }, canActivate: [AuthGuardService] }
    ]
    )
  ],
  declarations: [DeviceHomeComponent, DeviceListComponent, DeviceAddComponent, DeviceConfigComponent, EnrolledTableComponent, DeviceDetailsComponent],
  exports: [DeviceListComponent],
  providers: [DeviceService, CompatibilityService]
})
export class DeviceModule { }

