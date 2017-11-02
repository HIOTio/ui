import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule} from '@angular/router';
import {JwtHelper} from 'angular2-jwt';
import {MaterialModule } from '../../material.module';
import { AuthService } from './auth.service';
import {AuthGuardService } from './auth-guard.service';
import { LoginRegisterComponent } from './login-register/login-register.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileButtonComponent } from './profile-button/profile-button.component';
import {ProfileService} from './profile.service';
import { UserSettingsComponent } from './user-settings/user-settings.component';
import { SettingsComponent } from './admin/settings/settings.component';
import { NotificationComponent } from './notification/notification.component';
import {NotificationService } from './notification.service';
import { LogoutComponent } from './logout/logout.component';


@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild([
      { path: 'profile', component: ProfileComponent, canActivate: [AuthGuardService], data: {state: 'profile'}},
      { path: 'login', component: LoginRegisterComponent, data: {state: 'login'}},
      { path: 'settings', component: UserSettingsComponent, canActivate: [AuthGuardService]},
      { path: 'logout', component: LogoutComponent, canActivate: [AuthGuardService]}
    ])
  ],
  exports: [ProfileButtonComponent],
  declarations: [LoginRegisterComponent,
    ProfileComponent,
    ProfileButtonComponent, UserSettingsComponent,
    SettingsComponent, NotificationComponent, LogoutComponent],
  providers: [ProfileService, NotificationService, AuthService, AuthGuardService,JwtHelper]
})
export class UserModule { }
