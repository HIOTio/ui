import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes } from '@angular/router';
import { ReportsMenuComponent } from './menu/menu.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: 'reports', component: ReportsMenuComponent, data: {state: 'reports'}}
    ])
  ],
  declarations: [ReportsMenuComponent]
})
export class ReportsModule { }
