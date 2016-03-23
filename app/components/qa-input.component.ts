import {Component, Input, ContentChildren, QueryList, DoCheck} from "angular2/core";
import {QaInputEror} from "./qa-input-error.component";

@Component({
  selector: 'qa-input',
  templateUrl: './app/components/qa-input.component.html',
  directives: [QaInputEror]
})
export class QaInput implements DoCheck {

  @Input()
  labelText:string = '';
  @ContentChildren(QaInputEror)
  errors:QueryList<QaInputEror>;

  ngDoCheck():void {
    if (this.errors && this.errors.length > 1) {
      this.errors.toArray().forEach(
        (error:QaInputEror, i:number) => {
          if (i == 0) {
            error.showError();
          } else {
            error.hideError();
          }
        });
    }
  }

}
