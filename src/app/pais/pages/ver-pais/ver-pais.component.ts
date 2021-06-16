import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators'; // tomará un observable y devolverá un observable

import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {
  // antes de que se inicialice
  constructor(
    private activatedRoute: ActivatedRoute, // activatedRoute trae todo lo necesario para suscribirse a los cambios del url
    private paisService: PaisService
  ) { }

  // suscribirse a cualquier cambio del url
  ngOnInit(): void {
    this.activatedRoute.params // acceso al observable donde están los parámetros
      .pipe(
        switchMap(({id}) => this.paisService.buscarPaisPorCod(id)) // devuelve un observable nuevo con el parametro
      )
      .subscribe( resp => {
        console.log(resp);
      });
  }

}

// Otras formas:

// this.activatedRoute.params // este es un observable
// .subscribe(params => {
//  console.log(params); // el parametro es un id ya que en el app-routing.module se definió que el parametro es un id
// });
// }

//  this.activatedRoute.params
//      .subscribe(({id}) => { // desestructuración para obtener el parametro especifico que viene del url
//        console.log(id);
//        this.paisService.buscarPaisPorCod(id).subscribe(pais => { // el parametro se envía al método
//          console.log(pais);
//        });
