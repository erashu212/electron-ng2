import { bootstrap } from "@angular/platform-browser-dynamic";
import { ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { Root } from './app/routes/root/root'

bootstrap(Root,[
    ROUTER_PROVIDERS
])