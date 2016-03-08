import {OnInit} from "angular2/core";
import {Component} from "angular2/core";
import {RouteParams} from "angular2/router";
import {AppContacts} from "./app-contacts.service";

@Component({
  selector: 'qa-app-detail',
  templateUrl: './app/app-detail.component.html'
})
export class AppDetail implements OnInit{

  person: any = {};

  constructor(private _routeParams: RouteParams, private _appContacts: AppContacts){}

  ngOnInit():void {
    this._appContacts.getContact(this._routeParams.get('id')).
      subscribe((data:any) => this.person = data);
  }

}
