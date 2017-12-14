import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../../material/material.module';
import { UserModule } from '../user/user.module';
import { MainMenuComponent } from './main-menu/main-menu.component';
import {UserMenuService} from './user-menu.service';
import { CollapseModule } from 'ngx-bootstrap';


@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    UserModule,
    CollapseModule.forRoot()
  ],
  declarations: [MainMenuComponent],
  exports: [MainMenuComponent],
  providers: [UserMenuService]
})
export class LayoutModule { }
