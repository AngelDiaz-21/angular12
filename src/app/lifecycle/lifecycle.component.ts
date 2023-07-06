import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.scss']
})
export class LifecycleComponent implements OnInit, OnChanges, DoCheck, OnDestroy, AfterViewInit, AfterViewChecked, AfterContentInit, AfterContentChecked{
  
  @Input() notification:string = 'Desactivado';

  constructor() { 
    console.log('Primero se crea el constructor');
  }

  ngOnInit(): void {
    console.log('On Init');
  }

  // Si no se tienen Input no va a entrar a esta función, ya que verifica los inputs
  // Con la variable changes podemos saber el valor anterior y el valor actual, ya que si se imprime en consola nos muestra un objeto para saber esos datos así como si es el primer cambio realizado será true y si no en todo caso será false
  
  ngOnChanges(changes: SimpleChanges): void {
    console.log('On Changes', changes);
  }

  ngDoCheck(): void {
    console.log('Do Check');
  }

  // Estos 2 se van a ejecutar después de ngDoCheck
  // Va a verificar el contenido en cada momento en cada ngDoCheck
  ngAfterContentChecked(): void {
    console.log('CONTENT CHECK');
  }

  // Va a verificar el HTML en cada momento en cada ngDoCheck
  ngAfterViewChecked(): void {
    console.log('VIEW CHECK');
  }

  // Verifica el contenido que se ha cargado en el componente y entra una sola vez
  ngAfterContentInit(): void {
    console.log('CONTENT INIT');
  }

  // Verifica que el HTML se ejecute correctamente
  ngAfterViewInit(): void {
    console.log('VIEW INIT');
  }

  // Antes que el componente se destruya se va imprimir esto y para destruirlo se hace uso de una directiva
  ngOnDestroy(): void {
    console.log('ON DESTROY');
  }
  

}
