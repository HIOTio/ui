import { Component, OnInit } from '@angular/core';
import { UserMenuService } from '../user-menu.service';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../user/auth.service';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'hiot-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {
  isCollapsed = true;
  menuItems = [];
  staticMenu = [
    {
      link: '#benefits',
      title: 'Benefits'
    },
    {
      link: '#features',
      title: 'Features'
    },
    {
      link: '#overview',
      title: 'Overview'
    },
    {
      link: '#components',
      title: 'Components'
    },
    {
      link: '#contactus',
      title: 'Contact us'
    },
  ];
  collapsed(event: any): void {
  }

  expanded(event: any): void {
  }

  constructor(private userMenuService: UserMenuService, private _auth: AuthService) { }

  ngOnInit() {
    this._auth.isAuthenticated()
      .subscribe(data => {
        this.menuItems = this.userMenuService.myMenuItems(data);
        console.log(this.menuItems);
      });
  }

}
