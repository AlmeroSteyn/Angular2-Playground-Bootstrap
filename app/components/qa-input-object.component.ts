import {Component, Input, OnChanges} from "angular2/core";

@Component({
  selector: 'qa-input-object',
  templateUrl: './app/components/qa-input-object.component.html'
})
export class QaInputObject implements OnChanges {

  @Input()
  labelText:string = '';
  @Input()
  inputErrors:any;
  @Input()
  errorDefs:any;

  errorMessage: string = '';

  ngOnChanges(changes:any):void {
    var errors: any = changes.inputErrors.currentValue;
    this.errorMessage = '';
    if(errors){
      Object.keys(this.errorDefs).some(key => {
        if(errors[key]){
          this.errorMessage = this.errorDefs[key];
          return true;
        }
      });
    }
  }

}
