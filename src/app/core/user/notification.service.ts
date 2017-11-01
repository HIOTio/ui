import { Injectable } from '@angular/core';

@Injectable()
export class NotificationService {

  constructor() { }
  notifications= [
    {message: 'Here\'s a notification',
    action_type: 'close',
    action_title: 'close'},
    {message: 'Here\'s another notification',
    action_type: 'close',
    action_title: 'close me'},
  ];
}
