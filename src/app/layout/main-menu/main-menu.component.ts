import { Component, OnInit, ViewChild } from '@angular/core';
import {
  trigger, state, style, animate, transition, query,
} from '@angular/animations';
@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css'],
  animations: [
    trigger('routerAnimation', [
      transition('* <=> *', [
        // Initial state of new route
        query(':enter',
          style({
            position: 'fixed',
            width: '100%',
            transform: 'translateX(-100%)'
          }),
          {optional: true}),
        // move page off screen right on leave
        query(':leave',
          animate('500ms ease',
            style({
              position: 'fixed',
              width: '100%',
              transform: 'translateX(100%)'
            })
          ),
        {optional: true}),
        // move page in screen from left to right
        query(':enter',
          animate('500ms ease',
            style({
              opacity: 1,
              transform: 'translateX(0%)'
            })
          ),
        {optional: true}),
      ])
    ])
  ]
})

export class MainMenuComponent implements OnInit {
  @ViewChild('sidenav') sidenav;
  constructor() { }

  ngOnInit() {
  }
  close() {
    this.sidenav.close();
  }
  getRouteAnimation(outlet) {
    return outlet.activatedRouteData.state;
  }
}
