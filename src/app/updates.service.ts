import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs/Rx';
import { SocketsService } from './sockets.service';

// = 'ws://localhost:3000/deployment-597d23e321b13f0dfcd155be';

export interface Message {
  author: string;
  message: string;
}

@Injectable()
export class UpdatesService {
  socketUrls = [];
  public messages: Subject<Message>;

  constructor(private wsService: SocketsService) {
  }
  addChannel(URL) {
    this.socketUrls[URL] = this.messages = <Subject<Message> > this.wsService
      .connect(URL)
      .map((response: MessageEvent): Message => {
        console.log(response.data);
        let data = JSON.parse(response.data);
        return {
          author: data.author,
          message: data.message
        };
      });
  }
  removeChannel(URL) {
    this.socketUrls[URL].disconnect();
  }
}
