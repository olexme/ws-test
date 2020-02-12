import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';

import { CommonModule } from '@angular/common';

import { SocketComponent } from './socket.component';
import { SocketConfig, SocketService } from './socket.service';


@NgModule({
  imports:      [ CommonModule ],
  declarations: [ SocketComponent ],
  exports:      [ SocketComponent ]
})
export class SocketModule {
  constructor (@Optional() @SkipSelf() parentModule?: SocketModule) {
    if (parentModule) {
      throw new Error(
        'SocketTestModule is already loaded. Import it in the AppModule only');
    }
  }

  static forRoot(config: SocketConfig): ModuleWithProviders {
    return {
      ngModule: SocketModule,
      providers: [
        {provide: SocketService, useValue: config }
      ]
    };
  }
}