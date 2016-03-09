import {Component} from "angular2/core";
import {RouteConfig} from "angular2/router";
import {AppList} from "./app-list.component";
import {AppDetail} from "./app-detail.component";
import {ROUTER_DIRECTIVES} from "angular2/router";
import {ROUTER_PROVIDERS} from "angular2/router";
import {HTTP_PROVIDERS} from "angular2/http";
import {AppContacts} from "./services/app-contacts.service";
import {AppInfo} from "./services/app-info.service";


@Component({
  selector: 'qa-app',
  template: `<router-outlet></router-outlet>`,
  providers: [ROUTER_PROVIDERS, AppInfo, HTTP_PROVIDERS, AppContacts],
  directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
  {path: '/', name: 'Home', component: AppList},
  {path: '/detail/:id', name: 'Detail', component: AppDetail}
])
export class QaApp {

}
