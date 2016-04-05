import {Component} from "angular2/core";
import {OnInit} from "angular2/core";
import {QaValidators} from "../services/qa-validators.service";
import {FormBuilder, AbstractControl, FORM_DIRECTIVES} from "angular2/common";
import {ControlGroup} from "angular2/common";
import {Validators} from "angular2/common";
import {QaLengthValidator} from "../directives/qa-length-validator.directive";
import {QaInput} from "./qa-input.component";
import {QaInputError} from "./qa-input-error.component";
import {QaInputStyle} from "./qa-input-style.component";
import {QaInputObject} from "./qa-input-object.component";

@Component({
  selector: 'qa-validators-demo',
  templateUrl: './app/components/qa-validators-demo.component.html',
  directives: [QaLengthValidator, QaInput, QaInputError, QaInputObject, QaInputStyle, FORM_DIRECTIVES]
})
export class QaValidatorsDemo implements OnInit {

  demoForm:ControlGroup;
  someNumber:AbstractControl;
  someNumberStyle:AbstractControl;
  someNumberObject:AbstractControl;

  constructor(private qaValidators:QaValidators, private formBuilder:FormBuilder) {
  }

  ngOnInit() {
    this.demoForm = this.formBuilder.group({
      'someNumber': ['', Validators.compose([Validators.required, Validators.minLength(7), this.qaValidators.divisibleByTen])],
      'someNumberStyle': ['', Validators.compose([Validators.required, Validators.minLength(7), this.qaValidators.divisibleByTen])],
      'someNumberObject': ['', Validators.compose([Validators.required, Validators.minLength(7), this.qaValidators.divisibleByTen])]
    });

    this.someNumber = this.demoForm.find('someNumber');
    this.someNumberStyle = this.demoForm.find('someNumberStyle');
    this.someNumberObject = this.demoForm.find('someNumberObject');
  }
}
