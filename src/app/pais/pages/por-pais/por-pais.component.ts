import { Component} from '@angular/core';
import { Pais } from '../../interfaces/paises-interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent{

  termino: string = '';
  hayError: boolean = false;
  paises: Pais[] = [];

  constructor(private PaisService: PaisService) { }

  buscar(): void{
    this.hayError = false;
    if (this.termino.length > 0){
      console.log(this.termino);
    // para que un Observable se dispare se debe tener un subscribe
      this.PaisService.buscarPais(this.termino)
      .subscribe((paises) => { // primer argumento es la respuesta exitosa
        console.log(paises);
        this.paises = paises;
      }, (err) => { // segundo argumento para capturar errores
        this.hayError = true;
        this.paises = [];
      });
    }
  }

}
