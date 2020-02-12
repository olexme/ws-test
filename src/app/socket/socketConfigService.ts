import { Optional, Injectable, InjectionToken } from '@angular/core';
export const FOR_ROOT_SOCKET_CONFIG_TOKEN = new InjectionToken<SocketConfig>( "forRoot() SocketConfig configuration." );

export function provideMyServiceOptions( options?: SocketConfig ) : SocketConfigService {
    return new SocketConfigService(options);
}

@Injectable({
	providedIn: "root"
})
export class SocketConfig {
    my_url: string
}

@Injectable({
  providedIn: 'root'
})
export class SocketConfigService  {
    constructor(@Optional() public config: SocketConfig) {
        console.log('SocketConfigService constructor ', this.config);
    }
}