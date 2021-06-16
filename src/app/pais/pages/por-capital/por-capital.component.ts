import { Component } from '@angular/core';
import { Pais } from '../../interfaces/paises-interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent {

  termino: string = '';
  hayError: boolean = false;
  paises: Pais[] = [];

  constructor(private PaisService: PaisService) { }

  buscar(termino: string): void{
    this.hayError = false;
    this.termino = termino;
    if (this.termino.length > 0){
    // para que un Observable se dispare se debe tener un subscribe
      this.PaisService.buscarCapital(this.termino)
      .subscribe((paises) => { // primer argumento es la respuesta exitosa
        console.log(paises);
        this.paises = paises;
      }, (err) => { // segundo argumento para capturar errores
        console.log(err);
        this.hayError = true;
        this.paises = [];
      });
    }
  }

  sugerencias(termino: string): void{
    this.hayError = false;
    // crear sugerencias
  }

}
