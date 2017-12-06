import { QueueingSubject } from 'queueing-subject';
import websocketConnect from 'rxjs-websockets';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';
@Injectable()
export class UpdatesService {
  constructor(){}
  notifications: Subject<any>=new Subject();
  newNotification(message,action,duration){
    this.notifications.next({message:message, action:action, duration:duration});
  }
  getAlert(): Observable<any> {
    return this.notifications.asObservable();
}
connect(channel) {
  const input = new QueueingSubject<string>();
  const { messages, connectionStatus } = websocketConnect(channel, input);
  input.next('{ "action": "connect"}');
  const connectionStatusSubscription = connectionStatus.subscribe(numberConnected => {
  });
  /*messages.retryWhen(errors => errors.delay(1000)).subscribe(message => {
    this.newNotification(message, 'close', 2000);
    console.log(message);
  });*/

const messagesSubscription = messages.subscribe((data: string) => {
  const message = JSON.parse(data);
  this.newNotification(message.message, 'close', 2000);
});

}
disconnect(channel) {
  // this will close the websocket
// messagesSubscription.unsubscribe();

// closing the websocket does not close the connection status observable, it
// can be used to monitor future connection status changes
// connectionStatusSubscription.unsubscribe();

}
send(channel){

}
// this subject queues as necessary to ensure every message is delivered

// this method returns an object which contains two observables




}