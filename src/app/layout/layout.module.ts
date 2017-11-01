import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FlexLayoutModule} from '@angular/flex-layout';
import {RouterModule, Routes} from '@angular/router';
import { UserModule } from '../core/user/user.module';
import { MainMenuComponent } from './main-menu/main-menu.component';
import {MaterialModule} from '../material.module';
import { MenuItemsComponent } from './main-menu/menu-items/menu-items.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    UserModule
  ],
  declarations: [ MainMenuComponent, MenuItemsComponent],
  exports: [MainMenuComponent]

})
export class LayoutModule { }
