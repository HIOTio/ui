import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';

import { NotificationService } from '../notification.service';
@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {


  constructor(public snackBar: MatSnackBar, private notificationService: NotificationService) { }
  notifications= this.notificationService.notifications;
  ngOnInit() {
  }
  demoSnackBar() {
    this.snackBar.open('Demo Snackbar', 'some action', {
      duration: 2000
    });
  }
}
