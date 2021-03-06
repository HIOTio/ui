import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UserModule } from '../user/user.module';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { UserMenuService } from './user-menu.service';
import { CollapseModule } from 'ngx-bootstrap';
import { Ng2PageScrollModule } from 'ng2-page-scroll';
import { UpdatesService } from '../../updates.service';
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    UserModule,
    Ng2PageScrollModule,
    CollapseModule.forRoot()
  ],
  declarations: [MainMenuComponent],
  exports: [MainMenuComponent],
  providers: [UserMenuService, UpdatesService]
})
export class LayoutModule { }
