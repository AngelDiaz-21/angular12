import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-caja',
  templateUrl: './caja.component.html',
  styleUrls: ['./caja.component.scss']
})
export class CajaComponent {

  // Entrada
  // @Input() status: string = 'working';

  // Si queremos utilizar ese input con otro nombre  de variable dentro del archivo ts, se hace lo siguiente
  // El input se llama status pero dentro del archivo ts se llama statusCaja y de esa forma se utiliza para renderizar el contenido (se puede ver en el archivo caja.component.html) y en el archivo app.component.html se envía el valor con el nombre de status
  @Input('status') statusCaja: string = 'working';

  // Un output debe de ser de tipo EventEmitter()
  // Dentro del parentesis del EventEmitter se puede poner una variable inicial 
  // También se debe de indicar en que momento se va a enviar ese output hacia afuera (afuera del componente haciendo click u otros eventos)
  @Output('onSendDataStatus') sendData = new EventEmitter();

  constructor() { }

  onClickCaja(event: any){
    console.log('Event click: ', event);

    // Se usa el output personalizado
    // Aqui puedo enviar json, arrays, datos, etc
    // Para imprimir esto se debe de hacer en el componente donde se este utilizando selector: 'app-caja'
    this.sendData.emit({
      name: 'Angel',
      status: 'busy'
    });
  }


}
