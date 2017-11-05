import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ControlCentreComponent } from './control-centre/control-centre.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(
      [
        {path: 'control-centre', component:ControlCentreComponent}
      ]
    )
  ],
  declarations: [ControlCentreComponent]
})
export class ControlCentreModule { }
