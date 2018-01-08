import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { UserModule } from '../core/user/user.module';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { MaterialModule } from '../material/material.module';
import { MenuItemsComponent } from './main-menu/menu-items/menu-items.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    BrowserAnimationsModule,
    UserModule
  ],
  declarations: [MainMenuComponent, MenuItemsComponent],
  exports: [MainMenuComponent]

})
export class LayoutModule { }
