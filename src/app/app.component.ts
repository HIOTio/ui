import { Component, OnInit, ViewChild } from '@angular/core';
import {
  trigger, state, style, animate, transition, query,
} from '@angular/animations';
import { UpdatesService } from './updates.service';
import { DeploymentService } from './components/deployment/deployment.service';
import { NotificationComponent } from './core/user/notification/notification.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
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
          { optional: true }),
        // move page off screen right on leave
        query(':leave',
          animate('500ms ease',
            style({
              position: 'fixed',
              width: '100%',
              transform: 'translateX(100%)'
            })
          ),
          { optional: true }),
        // move page in screen from left to right
        query(':enter',
          animate('500ms ease',
            style({
              opacity: 1,
              transform: 'translateX(0%)'
            })
          ),
          { optional: true }),
      ])
    ])
  ]
})
export class AppComponent implements OnInit {
  title = 'HIOT';
  loading = true;
  alerts = [];
  constructor(private _updatesServ: UpdatesService) {
  }
  sendMsg() {
  }
  getRouteAnimation(outlet) {
    return outlet.activatedRouteData.state;
  }
  ngOnInit() {
    this.loading = false;

    this._updatesServ.notifications.subscribe((data) => {
      this.alerts.push(data);
    });
  }
}
