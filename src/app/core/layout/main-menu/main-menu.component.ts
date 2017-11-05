import { Component, OnInit } from '@angular/core';
import {UserMenuService} from '../user-menu.service';
import { RouterModule} from '@angular/router';
@Component({
  selector: 'hiot-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {
  menuItems = [];
  constructor(private userMenuService: UserMenuService) { }

  ngOnInit() {
    this.menuItems = this.userMenuService.myMenuItems();
  }

}
