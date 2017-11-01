import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule} from '@angular/router';

import {MaterialModule } from '../../material.module';
import { LoginRegisterComponent } from './login-register/login-register.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileButtonComponent } from './profile-button/profile-button.component';
import {ProfileService} from './profile.service';
import { UserSettingsComponent } from './user-settings/user-settings.component';
import { SettingsComponent } from './admin/settings/settings.component';
import { NotificationComponent } from './notification/notification.component';
import {NotificationService } from './notification.service';


@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild([
      { path: 'profile', component: ProfileComponent, data: {state: 'profile'}},
      { path: 'login', component: LoginRegisterComponent, data: {state: 'login'}}
    ])
  ],
  exports: [ProfileButtonComponent],
  declarations: [LoginRegisterComponent,
    ProfileComponent,
    ProfileButtonComponent, UserSettingsComponent,
    SettingsComponent, NotificationComponent],
  providers: [ProfileService, NotificationService]
})
export class UserModule { }
