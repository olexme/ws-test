import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';

import { CommonModule } from '@angular/common';

import { SocketComponent } from './socket.component';
import { SocketService } from './socket.service';
import { SocketIoModule } from 'ngx-socket-io';
import { SocketConfigService, SocketConfig, FOR_ROOT_SOCKET_CONFIG_TOKEN, provideMyServiceOptions } from './socketConfigService';
@NgModule({
  imports:      [ CommonModule, SocketIoModule ],
  declarations: [ SocketComponent ],
  exports:      [ SocketComponent ],
  providers: [SocketService]
})
export class SocketModule {
  constructor (@Optional() @SkipSelf() parentModule?: SocketModule) {
    if (parentModule) {
      throw new Error(
        'SocketTestModule is already loaded. Import it in the AppModule only');
    }
  }

  static forRoot(config?: SocketConfig): ModuleWithProviders {
    return {
      ngModule: SocketModule,
      providers: [
        {provide:  FOR_ROOT_SOCKET_CONFIG_TOKEN, useValue: config},
        {provide: SocketConfigService, 
         useFactory: provideMyServiceOptions,
				 deps: [ FOR_ROOT_SOCKET_CONFIG_TOKEN ]},
      ]
    };
  }
}