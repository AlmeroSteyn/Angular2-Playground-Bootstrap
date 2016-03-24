import {Component, Input} from "angular2/core";

@Component({
  selector: 'qa-input-style',
  templateUrl: './app/components/qa-input-style.component.html',
  styles: [`
      :host qa-input-errors > :not(:first-child) {
            display: none;
          }     
  `]
})
export class QaInputStyle {

  @Input()
  labelText:string = '';
  @Input()
  isError:boolean = false;

}
