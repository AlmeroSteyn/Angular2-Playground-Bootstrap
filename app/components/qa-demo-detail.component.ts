import {OnInit} from "angular2/core";
import {Component} from "angular2/core";
import {IContact} from "../models/contact.model";
import {QaDemoContacts} from "../services/qa-demo-contacts.service";
import {RouteParams} from "angular2/router";

@Component({
  selector: 'qa-demo-detail',
  templateUrl: './app/components/qa-demo-detail.component.html'
})
export class QaDemoDetail implements OnInit{

  itemEntry: IContact;

  constructor(private contacts: QaDemoContacts, private params: RouteParams ){}

  ngOnInit():void {
    this.contacts.getContact(this.params.get('id'))
    .subscribe(
      item => this.itemEntry = item
    );
  }

}
