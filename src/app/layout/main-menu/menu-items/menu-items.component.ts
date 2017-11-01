import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-menu-items',
  templateUrl: './menu-items.component.html',
  styleUrls: ['./menu-items.component.css']
})
export class MenuItemsComponent implements OnInit {
@Input() orientation: String;
@Output() closeNav: EventEmitter<any> = new EventEmitter();

public menuItems= [
  {
    link: '/dashboard',
    text: 'Dashboard'
  },
  {
    link: '/reports',
    text: 'Reports'
  },
  {
    link: '/profile',
    text: 'Profile'
  }
];
  constructor() { }

  ngOnInit() {
    console.log(this.orientation);
  }
  closeSideNav(evt, link) {
    this.closeNav.emit(evt);
  }

}
