import {Injectable} from "angular2/core";
import {Control} from "angular2/common";

@Injectable()
export class QaValidators {

  divisibleByTen(control: Control){

    return parseInt(control.value) % 10 == 0 ? null : {
      divisibleByTen: {
        valid: false
      }
    }
  }

  longerThanSeven(control:Control){

    return control.value.toString().length > 7 ? null : {
      underSeven: {
        valid: false
      }
    }

  }

}
