import { Component} from '@angular/core';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent{

  termino: string = 'Hola Mundo';
  hayError: boolean = false;

  constructor(private PaisService: PaisService) { }

  buscar(): void{
    this.hayError = false;
    console.log(this.termino);
    // para que un Observable se dispare se debe tener un subscribe
    this.PaisService.buscarPais(this.termino)
      .subscribe((resp) => { // primer argumento es la respuesta exitosa
        console.log(resp);
      }, (err) => { // segundo argumento para capturar errores
        this.hayError = true;
      });
  }

}
