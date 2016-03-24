import {Component} from "angular2/core";
import {OnInit} from "angular2/core";
import {QaValidators} from "../services/qa-validators.service";
import {FormBuilder, AbstractControl} from "angular2/common";
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
  directives: [QaLengthValidator, QaInput, QaInputError, QaInputObject, QaInputStyle]
})
export class QaValidatorsDemo implements OnInit {

  demoForm:ControlGroup;
  divNumber: AbstractControl;
  divNumberStyle: AbstractControl;
  divNumberObject: AbstractControl;

  constructor(private qaValidators:QaValidators, private formBuilder:FormBuilder) {
  }

  ngOnInit() {
    this.demoForm = this.formBuilder.group({
      'divNumber': ['',Validators.compose([ Validators.required, this.qaValidators.divisibleByTen])],
      'divNumberStyle': ['',Validators.compose([ Validators.required, this.qaValidators.divisibleByTen])],
      'divNumberObject': ['',Validators.compose([ Validators.required, this.qaValidators.divisibleByTen])]
    });

    this.divNumber = this.demoForm.find('divNumber');
    this.divNumberStyle = this.demoForm.find('divNumberStyle');
    this.divNumberObject = this.demoForm.find('divNumberObject');
  }
}
