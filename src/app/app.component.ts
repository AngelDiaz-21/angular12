import { Component } from '@angular/core';

// Decoradores
@Component({
  selector: 'app-root', /* Nombre que va a tener el componente */
  templateUrl: './app.component.html', /* Se hace referencia al html que usará este componente */
  styleUrls: ['./app.component.scss'] /* Se hace referencia al css que usará este componente, puede usar varias hojas de estilos que serán definidas dentro del array */
})
export class AppComponent {
  title = 'angular12';
  myStatus = 'my Status Angel';

  bandera = true;

  constructor(){
    
  }

  printDataAppCaja(event:any){
    console.log('AppCajaComponent: ', event);
  }

  printMessage(message:any){
    console.log('AppTestComponent: ', message);
  }

}
