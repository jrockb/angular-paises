import { Component} from '@angular/core';
import { Pais } from '../../interfaces/paises-interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    `
      li{
        cursor: pointer;
      }
    `
  ]
})
export class PorPaisComponent{

  termino: string = '';
  hayError: boolean = false;
  paises: Pais[] = [];
  paisesSugeridos: Pais[] = [];
  mostrarSugerencias: boolean = false;

  constructor(private paisService: PaisService) { }

  buscar(termino: string): void{
    this.mostrarSugerencias = false;
    this.hayError = false;
    this.termino = termino;
    if (this.termino.length > 0){
    // para que un Observable se dispare se debe tener un subscribe
      this.paisService.buscarPais(this.termino)
      .subscribe((paises) => { // primer argumento es la respuesta exitosa
        console.log(paises);
        this.paises = paises;
      }, (err) => { // segundo argumento para capturar errores
        this.hayError = true;
        this.paises = [];
      });
    }
  }

  sugerencias(termino: string): void{
    if (termino.length > 0){
      this.mostrarSugerencias = true;
      this.hayError = false;
      this.termino = termino;
      this.paisService.buscarPais(termino)
        .subscribe(
          paises => this.paisesSugeridos = paises.splice(0,5),  // solo mostrará 5 paises sugeridos
          (err) => this.paisesSugeridos = []
          );
    }
  }

  buscarSugerido(termino: string): void{
    this.buscar(termino);
  }

}
