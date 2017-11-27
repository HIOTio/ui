import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Observable} from 'rxjs/Observable';

import { UpdatesService } from '../../../updates.service';
@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  constructor(public snackBar: MatSnackBar, private _updates: UpdatesService) { }
  notifications: Observable<any>;
  ngOnInit() {
    this._updates.getAlert()
    .subscribe(data => {
      this.showSnackBar(data.message, data.action, data.duration);
    }
    );
  }
  showSnackBar(message,action,duration) {
    this.snackBar.open(message, action, {
      duration: duration
    });
  }
}
