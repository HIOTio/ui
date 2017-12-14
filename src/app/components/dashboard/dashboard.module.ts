import { DragulaModule } from 'ng2-dragula/components/dragular.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { slideInOutAnimation } from '../../core/animations/anim';
import {RouterModule, Routes } from '@angular/router';
import {MaterialModule } from '../../material/material.module';
import { DeploymentModule } from '../deployment/deployment.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    DeploymentModule,
    DragulaModule,
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
