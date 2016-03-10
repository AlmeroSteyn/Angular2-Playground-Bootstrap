import {Component} from "angular2/core";
import {Input} from "angular2/core";
import {Output} from "angular2/core";
import {IContact} from "../models/contact.model";
import {EventEmitter} from "angular2/core";
import {FORM_DIRECTIVES} from "angular2/common";
import {OnInit} from "angular2/core";
import {Contact} from "../models/contact.model";
import {Observable} from "rxjs/Observable";
import {ChangeDetectionStrategy} from "angular2/core";
import {OnChanges} from "angular2/core";

@Component({
  selector: 'qa-demo-edit-person',
  templateUrl: './app/components/qa-demo-edit-person.component.html',
  directives: [FORM_DIRECTIVES]
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

  save():void {
    this.onChange.emit(this.internalItem);
  }

}
