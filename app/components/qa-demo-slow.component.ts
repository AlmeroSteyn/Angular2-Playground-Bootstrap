import {Component, OnInit} from "@angular/core";
import {QaDemoContacts} from "../services/qa-demo-contacts.service";
import {IContact} from "../models/contact.model";
import {Observable} from "rxjs/Observable";
import {CORE_DIRECTIVES} from "@angular/common";
import {ROUTER_DIRECTIVES} from "@angular/router-deprecated";

@Component({
  selector:'qa-demo-slow',
  templateUrl: './app/components/qa-demo-slow.component.html',
  directives: [CORE_DIRECTIVES, ROUTER_DIRECTIVES]
})
export class QaDemoSlow implements OnInit{
  items: Observable<IContact[]>;

  constructor(private contacts: QaDemoContacts){
  }

  ngOnInit():void {
    this.loadList();
  }

  private loadList(){
    this.items = this.contacts.getContactsSlow();
  }
}
