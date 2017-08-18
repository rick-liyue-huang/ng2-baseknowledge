import { Injectable } from '@angular/core';
import {Observable} from "rxjs";

@Injectable()
export class WebSocketService {

  ws: WebSocket;

  constructor() { }


  // connect server and receive the data from server.
  connect(url: string): Observable<any> {
    this.ws = new WebSocket(url);
    return new Observable(

      observer => {
        this.ws.onmessage = (event) => observer.next(event.data);
        this.ws.onerror = (event) => observer.error(event);
        this.ws.onclose = (event) => observer.complete();
      }
    );
  }

  // send the message to server
  send(message:string) {
    this.ws.send(message);
  }

}







































