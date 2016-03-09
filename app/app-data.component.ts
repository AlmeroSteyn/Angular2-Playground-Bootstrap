import {OnInit} from "angular2/core";
import {Component} from "angular2/core";
import {Input} from "angular2/core";
import {Output} from "angular2/core";
import {EventEmitter} from "angular2/core";

@Component({
  selector: 'app-data',
  templateUrl: './app/app-data.component.html'
})
export class AppData implements OnInit{
  @Input() myValue: string;
  @Output() myEvent: EventEmitter<string> = new EventEmitter();

  onClick(){
    this.myEvent.emit('test');
  }

  ngOnInit():void {

  }

}
