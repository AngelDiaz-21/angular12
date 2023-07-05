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

  onShowData(){
    this.onSendData.emit('General data ' + this.name +' '+ this.lastName);
  }

}