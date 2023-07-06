import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent {
  @Input() name: string = 'name';
  @Input() lastName: string = 'LastName';

  @Output() onSendData = new EventEmitter();

  constructor() { }

  textMessage: string = 'Holaaa';

  number1:number = 0;
  number2:number = 0;
  result:number = 0;

  onShowData(){
    this.result = (this.number1) + (this.number2);
    this.onSendData.emit('General data ' + this.name +' '+ this.lastName);
  }

}