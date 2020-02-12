 import { Optional, Injectable, NgModule } from '@angular/core';
import { Socket } from 'ngx-socket-io';

export type SocketConfig = {
  my_url: string
}


@Injectable({
  providedIn: 'root'
})
export class SocketService extends Socket {

    constructor(@Optional() config?: SocketConfig) {
        super({ url: config ? config.my_url : 'http://badurl.io', options: {} });
    }

}