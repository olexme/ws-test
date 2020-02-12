
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/* App Root */
import { AppComponent } from './app.component';
import {SocketModule} from './socket/socket.module';


@NgModule({
  imports: [
    BrowserModule,
    SocketModule.forRoot({my_url: 'wss://socket-io-chat.now.sh/'}),
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/