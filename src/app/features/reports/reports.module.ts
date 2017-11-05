import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule} from '@angular/router';
import { ReportHomeComponent } from './report-home/report-home.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: 'reports', component: ReportHomeComponent}
    ])
  ],
  declarations: [ReportHomeComponent]
})
export class ReportsModule { }
