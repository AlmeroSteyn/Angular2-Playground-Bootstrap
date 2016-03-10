import {OnInit} from "angular2/core";
import {Component} from "angular2/core";
import {IContact} from "../models/contact.model";
import {QaDemoContacts} from "../services/qa-demo-contacts.service";
import {RouteParams} from "angular2/router";
import {QaDemoEditPerson} from "./qa-demo-edit-person.component";
import {CORE_DIRECTIVES} from "angular2/common";

@Component({
  selector: 'qa-demo-detail',
  templateUrl: './app/components/qa-demo-detail.component.html',
  directives:[QaDemoEditPerson, CORE_DIRECTIVES]
})
export class QaDemoDetail implements OnInit{

  itemEntry: IContact;

  constructor(private contacts: QaDemoContacts, private params: RouteParams ){}

  save(arg: IContact){
    this.contacts.putContact(arg)
    .subscribe(
      (item:IContact) => this.itemEntry = item
    );
  }

  ngOnInit():void {
    this.contacts.getContact(this.params.get('id'))
    .subscribe(
      item => this.itemEntry = item
    );
  }

}
