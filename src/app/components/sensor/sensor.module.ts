import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SensorHomeComponent } from './sensor-home/sensor-home.component';
import { SensorListComponent } from './sensor-list/sensor-list.component';
import { SensorService} from './sensor.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SensorHomeComponent, SensorListComponent],
  exports: [SensorListComponent],
  providers: [SensorService]
})
export class SensorModule { }
