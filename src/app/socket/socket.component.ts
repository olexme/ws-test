
import { Component } from '@angular/core';
import { SocketService } from './socket.service';

@Component({
  selector: 'app-socket-test',
  styleUrls: ['./socket.component.css'],
  template: `
  <p>Joined : https://socket.io/demos/chat/</p>
  <p>My User Name: {{userName}}</p>
  <input #myInput value="test message" >
<button (click)="sendEchoMessage(myInput.value)">send Message</button>
<textarea cols="10" rows="40">{{output}}</textarea>
`
})
export class SocketComponent {
  output = '';
  userName = 'aaa' + Date.now();
  constructor(private socketService: SocketService) {
    this.socketService.connect();
    this.socketService.emit("add user", this.userName);
  }

  sendEchoMessage(msg: string) {
    this.socketService.emit("new message", msg);
    this.output += '\nsending message: ' + msg;
  }
}
