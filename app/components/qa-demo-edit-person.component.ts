import {Component} from "angular2/core";
import {Input} from "angular2/core";
import {Output} from "angular2/core";
import {IContact} from "../models/contact.model";
import {EventEmitter} from "angular2/core";
import {FORM_DIRECTIVES} from "angular2/common";
import {OnInit} from "angular2/core";
import {Contact} from "../models/contact.model";

@Component({
  selector: 'qa-demo-edit-person',
  templateUrl:'./app/components/qa-demo-edit-person.component.html',
  directives: [FORM_DIRECTIVES]
})
export class QaDemoEditPerson implements OnInit{

  @Input() person: IContact;
  @Output() onChange: EventEmitter<IContact> = new EventEmitter();

  internalItem: IContact;

  save():void {
    this.onChange.emit(this.internalItem);
  }

  ngOnInit(){
    if(this.person) {
      this.internalItem = {
        id: this.person.id,
        firstname: this.person.firstname,
        lastname: this.person.lastname
      };
    }else {
      this.internalItem = new Contact();
    }
  }

}
