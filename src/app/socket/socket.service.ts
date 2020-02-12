import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { SocketConfigService } from './socketConfigService';


@Injectable()
export class SocketService extends Socket {

    constructor(conf: SocketConfigService) {
        super({ url: conf.config ? conf.config.my_url : 'http://badurl.io', options: {} });
    }

}