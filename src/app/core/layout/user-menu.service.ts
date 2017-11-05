import { Injectable } from '@angular/core';

@Injectable()
export class UserMenuService {

  constructor() { }
  myMenuItems() {
    return [
      {link: '/deployment', title: 'Deployments'},
      {link: '/reports', title: 'Reports'},
      {link: '/aggregator', title: 'Aggregators'},
      {link: '/dashboard', title: 'Dashboard'},
      {link: '/health', title: 'Health & Status'},
      {link: '/control-centre', title: 'Control Centre'},
      {link: '/settings', title: 'Settings'}
    ];
  }
}
