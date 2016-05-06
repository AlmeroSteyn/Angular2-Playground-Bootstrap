import {Component, Input, Output, EventEmitter, OnChanges} from "@angular/core";
import {FORM_DIRECTIVES} from "@angular/common";
import {Contact, IContact} from "../models/contact.model";
import {A11yInput} from "./a11y-input.component";

@Component({
  selector: 'qa-demo-edit-person',
  templateUrl: './app/components/qa-demo-edit-person.component.html',
  directives: [FORM_DIRECTIVES, A11yInput]
})
export class QaDemoEditPerson implements OnChanges {

  @Input() person:IContact;
  @Output() onChange:EventEmitter<IContact> = new EventEmitter();

  internalItem:IContact = new Contact();

  ngOnChanges(changes:any):void {
    var personChange:IContact = changes.person.currentValue;
    if (personChange) {
      this.internalItem = new Contact(personChange.id, personChange.firstname, personChange.lastname);
    }
  }

  onSave():void {
    this.onChange.emit(this.internalItem);
  }

}
