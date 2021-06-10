import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html'
})
export class PaisInputComponent {

  // tslint:disable-next-line: no-output-on-prefix
  @Output()
  onEnter: EventEmitter<string> = new EventEmitter(); // para emitir el string termino al componente padre

  termino: string = '';


  buscar(): void{
    // cuando se presione enter se va a emitir el string termino
    this.onEnter.emit(this.termino);
  }

}
