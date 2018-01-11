import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MakeModelComponent } from './make-model/make-model.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MakeService } from './make.service';
import { ModelService } from './model.service';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [MakeModelComponent],
  exports: [MakeModelComponent],
  providers: [MakeService, ModelService]
})
export class MakeModelModule { }
