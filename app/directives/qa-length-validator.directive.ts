import {Directive, provide, forwardRef} from "@angular/core";
import {Control, NG_VALIDATORS} from "@angular/common";
import {QaValidators} from "../services/qa-validators.service";

@Directive({
  selector: '[qaLengthValidator]',
  providers: [provide(NG_VALIDATORS,{
    useExisting:forwardRef(() => QaLengthValidator),
    multi: true
  })]
})
export class QaLengthValidator{

  constructor(private validators: QaValidators){}

  validate(control: Control){
    return this.validators.longerThanSeven(control);
  }
}
