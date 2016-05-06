import {OnInit, Component} from "@angular/core";
import {IContact} from "../models/contact.model";
import {QaDemoContacts} from "../services/qa-demo-contacts.service";
import {Observable} from "rxjs/Observable";
import {CORE_DIRECTIVES} from "@angular/common";
import {ROUTER_DIRECTIVES} from "@angular/router-deprecated";
import {QaDemoEditPerson} from "./qa-demo-edit-person.component";
import {QaValidatorsDemo} from "./qa-validators-demo.component";

@Component({
  selector: 'qa-demo-list',
  templateUrl: './app/components/qa-demo-list.component.html',
  directives: [CORE_DIRECTIVES, ROUTER_DIRECTIVES, QaDemoEditPerson, QaValidatorsDemo]
})

export class QaDemoList implements OnInit{

    items: Observable<IContact[]>;

    constructor(private contacts: QaDemoContacts){
    }

    save(arg: IContact){
      this.contacts.postContact(arg)
      .subscribe(
        () => {
          this.loadList();
        }
      );
    }

    ngOnInit():void {
      this.loadList();
    }

    private loadList(){
      this.items = this.contacts.getContacts();
    }

}
