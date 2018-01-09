
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './auth.service';
import { JwtHelper } from 'angular2-jwt';
import { HttpModule } from '@angular/http';
import { AuthGuardService } from './auth-guard.service';
import { LoginRegisterComponent } from './login-register/login-register.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileButtonComponent } from './profile-button/profile-button.component';
import { ProfileService } from './profile.service';
import { UserSettingsComponent } from './user-settings/user-settings.component';
import { SettingsComponent } from './admin/settings/settings.component';
import { NotificationComponent } from './notification/notification.component';
import { LogoutComponent } from './logout/logout.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../../material/material.module';
import { LoginMenuComponent } from './login-menu/login-menu.component';
import { BsDropdownModule } from 'ngx-bootstrap';
import { UserAddComponent } from './user-add/user-add.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CreateComponent } from './create/create.component';
@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    HttpModule,
    ModalModule.forRoot(),
    BsDropdownModule.forRoot(),
    RouterModule.forChild([
      { path: 'profile', component: ProfileComponent, canActivate: [AuthGuardService], data: { state: 'profile' } },
      { path: 'login', component: LoginRegisterComponent, data: { state: 'login' } },
      { path: 'accessDenied/:route', component: LoginRegisterComponent },
      { path: 'settings', component: UserSettingsComponent, canActivate: [AuthGuardService] },
      { path: 'logout', component: LogoutComponent }
    ])
  ],
  exports: [LoginMenuComponent, ProfileButtonComponent, UserAddComponent],
  declarations: [LoginRegisterComponent,
    ProfileComponent,
    ProfileButtonComponent, UserSettingsComponent,
    SettingsComponent, NotificationComponent, LogoutComponent, LoginMenuComponent, UserAddComponent, CreateComponent],
  providers: [ProfileService, AuthService, AuthGuardService, JwtHelper]
})

export class UserModule { }
