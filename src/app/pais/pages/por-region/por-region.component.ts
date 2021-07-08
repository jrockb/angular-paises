import { Component } from '@angular/core';
import { Pais } from '../../interfaces/paises-interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [`
    button{
      margin-right: 5px;
    }
  `
  ]
})
export class PorRegionComponent {

  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActiva: string = ''; // variable para saber cual region se seleccionó
  paises: Pais[] = [];

  constructor(private paisService: PaisService) { }

  getClaseCSS(region: string): string{
    return (region === this.regionActiva) ? 'btn btn-primary' : 'btn btn-outline-primary';
  }

  activarRegion(region: string): void{
    if (region !== this.regionActiva){ // para no volver a realizar la consulta si ya existe
      this.regionActiva = region;
      this.paises = [];
      this.paisService.buscarPorRegion(region)
      .subscribe(paises => { // primer argumento es la respuesta exitosa
        console.log(paises);
        this.paises = paises;
      });
    }
  }

}
