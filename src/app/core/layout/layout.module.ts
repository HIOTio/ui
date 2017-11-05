import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../../material/material.module';
import { UserModule } from '../user/user.module';
import { MainMenuComponent } from './main-menu/main-menu.component';
import {UserMenuService} from './user-menu.service';


@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    UserModule
  ],
  declarations: [MainMenuComponent],
  exports: [MainMenuComponent],
  providers: [UserMenuService]
})
export class LayoutModule { }
