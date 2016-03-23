import {Component} from "angular2/core";
import {OnInit} from "angular2/core";
import {QaValidators} from "../services/qa-validators.service";
import {FormBuilder, AbstractControl} from "angular2/common";
import {ControlGroup} from "angular2/common";
import {Validators} from "angular2/common";
import {QaLengthValidator} from "../directives/qa-length-validator.directive";
import {QaInput} from "./qa-input.component";
import {QaInputEror} from "./qa-input-error.component";

@Component({
  selector: 'qa-validators-demo',
  templateUrl: './app/components/qa-validators-demo.component.html',
  directives: [QaLengthValidator, QaInput, QaInputEror]
})
export class QaValidatorsDemo implements OnInit {

  demoForm:ControlGroup;
  divNumber: AbstractControl;

  // divNumberErrorMessage: any = {
  //   required: 'A value is required',
  //   divisibleByTen: 'The number is not divisible by 10',
  //   underSeven: 'The number should be seven digits long'
  // };

  constructor(private qaValidators:QaValidators, private formBuilder:FormBuilder) {
  }

  ngOnInit() {
    this.demoForm = this.formBuilder.group({
      'divNumber': ['',Validators.compose([ Validators.required, this.qaValidators.divisibleByTen])]
    });

    this.divNumber = this.demoForm.find('divNumber');
  }
}
