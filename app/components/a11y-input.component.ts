import {Component, Provider, forwardRef, Input} from "@angular/core";
import {ControlValueAccessor, NG_VALUE_ACCESSOR, CORE_DIRECTIVES} from "@angular/common";

const noop = () => {};

const A11Y_INPUT_CONTROL_VALUE_ACCESSOR = new Provider(
  NG_VALUE_ACCESSOR, {
    useExisting: forwardRef(() => A11yInput),
    multi: true
  });

@Component({
  selector: 'a11y-input',
  templateUrl: './app/components/a11y-input.component.html',
  directives: [CORE_DIRECTIVES],
  providers: [A11Y_INPUT_CONTROL_VALUE_ACCESSOR]
})
export class A11yInput implements ControlValueAccessor{

  private _value: any = '';

  /** Callback registered via registerOnTouched (ControlValueAccessor) */
  private _onTouchedCallback: () => void = noop;
  /** Callback registered via registerOnChange (ControlValueAccessor) */
  private _onChangeCallback: (_: any) => void = noop;

  get value(): any { return this._value; };

  @Input() set value(v: any) {
    if (v !== this._value) {
      this._value = v;
      this._onChangeCallback(v);
    }
  }

  /** Implemented as part of ControlValueAccessor. */
  writeValue(value: any) {
    this._value = value;
  }

  /** Implemented as part of ControlValueAccessor. */
  registerOnChange(fn: any) {
    this._onChangeCallback = fn;
  }

  /** Implemented as part of ControlValueAccessor. */
  registerOnTouched(fn: any) {
    this._onTouchedCallback = fn;
  }

}
