import {Component} from '@angular/core';
//import './../externalJS/ffff.js';

declare var sum: any;
declare var saveJSON: any;
declare var jsonfile: any;

@Component({
  selector: 'main-page',
  templateUrl: 'main-page.component.html',
  styleUrls: ['main-page.component.scss']
})

export class MainPageComponent {

  private sss: string;

  constructor() {
    saveJSON();
  }

  createJSON() {
    var fileUrl = './test/json';
    var obj = {name: "roman"};
    jsonfile.writeFile(fileUrl, obj, function (err) {
      console.error(err);
    });
  }


}

/*

 import * as io from 'socket.io-client';

FROM CONSTRUCTOR:
this.socket = io('http://localhost:4200');
this.socket.on('message', (msg) => {
  console.log(msg);
});

ANOTHER FUNC
send(msg) {
 this.socket.emit('message', msg);
}

*/
