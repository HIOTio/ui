import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import {RouterModule, Routes } from '@angular/router';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: 'dashboard', component: DashboardComponent, data: {state: 'dashboard'}}
    ]
    )
  ],
  exports: [
    DashboardComponent
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule { }
