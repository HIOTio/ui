import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule} from '@angular/router';
import { HealthComponent } from './health.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(
      [
        {path:'health', component:HealthComponent}
      ]
    )
  ],
  declarations: [HealthComponent]
})
export class HealthModule { }
