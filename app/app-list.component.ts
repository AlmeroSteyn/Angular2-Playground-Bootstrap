import {OnInit} from "angular2/core";
import {Component} from "angular2/core";
import {AppInfo} from "./app-info.service";
import {CORE_DIRECTIVES} from "angular2/common";
import {ROUTER_DIRECTIVES} from "angular2/router";
import {AppContacts} from "./app-contacts.service";
import {FORM_DIRECTIVES} from "angular2/common";

@Component({
  selector: 'qa-app-list',
  templateUrl: './app/app-list.component.html',
  directives: [CORE_DIRECTIVES, ROUTER_DIRECTIVES, FORM_DIRECTIVES]
})
export class AppList implements OnInit{

  names:any;

  color:string =  '#000000';

  testVal:string = '';

  constructor(private _appInfo: AppInfo, private _appContacts: AppContacts){}

  onClick(){
    alert('test');
  }

  ngOnInit():void {
    this.names = this._appContacts.getContacts();

  }

}
