import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControllerHomeComponent } from './controller-home/controller-home.component';
import { ControllerListComponent } from './controller-list/controller-list.component';
import { ControllerService } from './controller.service';
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ControllerHomeComponent, ControllerListComponent],
  exports: [ControllerListComponent],
  providers: [ControllerService]
})
export class ControllerModule { }
