import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html'
})
export class PaisInputComponent implements OnInit{

  // tslint:disable-next-line: no-output-on-prefix
  @Output()
  onEnter: EventEmitter<string> = new EventEmitter(); // para emitir el string termino al componente padre

  // tslint:disable-next-line: no-output-on-prefix
  @Output()
  onDebounce: EventEmitter<string> = new EventEmitter(); //  ondebounce se va a emitir cuando el usuario deja de escribir

  debouncer: Subject<string> = new Subject(); // subject es un obervable, esto pertenece a rxjs que es la biblioteca de prog. reactiva

  termino: string = '';

  ngOnInit(): void { // se dispara solo una vez cuando el componente es creado
    this.debouncer // como es un observable se pueden usar operadores de rxjs
    .pipe( // permite transformar la salida del suscribe
      debounceTime(300) // método de rxjs/operators que genera un retardo de tiempo en ms antes de emitir el siguiente valor
    ) // no se hace el subscribe hasta que el observable deje de emitir valores por 300 ms
    .subscribe( (valor: any) => { // se suscribe al debouncer
      this.onDebounce.emit(valor); // cuando pasan los 300 ms se emite el valor
    });
  }

  buscar(): void{
    // cuando se presione enter se va a emitir el string termino
    this.onEnter.emit(this.termino);
    }

  // tslint:disable: jsdoc-format
  /** esto se ejecutará cada que se presione una tecla, en este caso el component.html enviará el $event
  teclaPresionada(event: any): void { // recibe el evento
    const valor = event.target.value; // extrae el valor que viene del evento
    console.log(valor);
    console.log(this.termino);
   } */

   teclaPresionada(): void{
     this.debouncer.next(this.termino); // cada que se presione una tecla va llamar al next que esta suscrito en el ngOnInit
   }

}
