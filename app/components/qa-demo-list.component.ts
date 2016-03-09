import {OnInit} from "angular2/core";
import {Component} from "angular2/core";
import {IContact} from "../models/contact.model";
import {QaDemoContacts} from "../services/qa-demo-contacts.service";
import {Observable} from "rxjs/Observable";
import {CORE_DIRECTIVES} from "angular2/common";

@Component({
  selector: 'qa-demo-list',
  templateUrl: './app/components/qa-demo-list.component.html',
  directives: [CORE_DIRECTIVES]
})

export class QaDemoList implements OnInit{

    items: Observable<IContact[]>;

    constructor(private contacts: QaDemoContacts){
    }

    ngOnInit():void {
      this.items = this.contacts.getContacts();
    }

}
