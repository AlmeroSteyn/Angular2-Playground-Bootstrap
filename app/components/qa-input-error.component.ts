import {Component} from "@angular/core";
import {CORE_DIRECTIVES} from "@angular/common";

@Component({
  selector: 'qa-input-error',
  templateUrl: './app/components/qa-input-error.component.html',
  directives: [CORE_DIRECTIVES]
})
export class QaInputError {
  showErrorFlag:boolean = true;

  hideError():void {
    this.showErrorFlag = false;
  }

  showError():void {
    this.showErrorFlag = true;
  }

}
