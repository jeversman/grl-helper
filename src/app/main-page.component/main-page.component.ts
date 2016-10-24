import {Component} from '@angular/core';
import * as io from 'socket.io-client';

@Component({
  selector: 'main-page',
  templateUrl: 'main-page.component.html',
  styleUrls: ['main-page.component.scss']
})

export class MainPageComponent {
  private socket;

  constructor() {
    this.socket = io.connect('http://localhost:4200');
    this.socket.on('connect', () => {
      console.log('connect');
    });
  }

  send(msg) {
    this.socket.emit('message', msg);
  }
}
