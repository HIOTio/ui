import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {AuthGuardService } from '../user/auth-guard.service';
import { SettingsComponent } from './settings.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(
      [
        {path:'settings', component: SettingsComponent,canActivate:[AuthGuardService]}
      ]
    )
  ],
  declarations: [SettingsComponent]
})
export class SettingsModule { }
