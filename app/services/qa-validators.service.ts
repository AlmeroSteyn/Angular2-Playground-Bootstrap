import {Injectable} from "@angular/core";
import {Control} from "@angular/common";

@Injectable()
export class QaValidators {

  divisibleByTen(control:Control) {

    return parseInt(control.value) % 10 == 0 ? null : {
      divisibleByTen: true
    }
  }

  longerThanSeven(control:Control) {

    return control.value.toString().length > 7 ? null : {
      underSeven: true
    }

  }

}
