import {Component, Input, ContentChildren, QueryList, DoCheck} from "angular2/core";
import {QaInputError} from "./qa-input-error.component";

@Component({
  selector: 'qa-input',
  templateUrl: './app/components/qa-input.component.html',
  directives: [QaInputError]
})
export class QaInput implements DoCheck {

  @Input()
  labelText:string = '';
  @Input()
  isError:boolean = false;
  @ContentChildren(QaInputError)
  errors:QueryList<QaInputError>;

  ngDoCheck():void {
    if (this.errors) {
      this.errors.toArray().forEach(
        (error:QaInputError, i:number) => {
          if (i == 0) {
            error.showError();
          } else {
            error.hideError();
          }
        });
    }
  }

}
