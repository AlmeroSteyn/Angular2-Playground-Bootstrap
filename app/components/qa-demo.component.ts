import {Component} from "@angular/core";
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from "@angular/router-deprecated";
import {QaDemoList} from "./qa-demo-list.component";
import {QaDemoDetail} from "./qa-demo-detail.component";
import {HTTP_PROVIDERS} from "@angular/http";
import {QaDemoContacts} from "../services/qa-demo-contacts.service";
import {QaValidators} from "../services/qa-validators.service";

@Component({
  selector: 'qa-demo',
  template: '<router-outlet></router-outlet>',
  providers: [ROUTER_PROVIDERS, HTTP_PROVIDERS, QaDemoContacts, QaValidators],
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  {path: '/', name:'List', component: QaDemoList},
  {path: '/detail/:id', name: 'Detail', component: QaDemoDetail}
])
export class QaDemo{
}
