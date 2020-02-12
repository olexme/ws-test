
import { Component, Input } from '@angular/core';
import { SocketService } from './socket.service';

@Component({
  selector: 'app-socket-test',
  styles:[`
  :host {
    border: 1px solid red;
    display: flex:
    flex-direction: column;
  }
  `],
  template: `<input #myInput value="test message" >
<button (click)="sendEchoMessage(myInput.value)">send WS Echo Message</button>
<p>{{output}}</p>
`
})
export class SocketComponent {
  output = '';
  constructor(private socketService: SocketService) {
    // this.socketService.on("message", (data: string) => {
    //     this.output += '<br>got message' + data;
    // });
  }

  sendEchoMessage(msg: string) {
    // this.output += '<br>sending message' + msg;
    // this.socketService.emit("message", msg);
  }
}
