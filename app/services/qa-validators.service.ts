import {Injectable} from "angular2/core";
import {Control} from "angular2/common";

@Injectable()
export class QaValidators {

  divisibleByTen(control: Control){

    return parseInt(control.value) % 10 == 0 ? null : {
      divisbleByTen: {
        valid: false
      }
    }
  }

}
