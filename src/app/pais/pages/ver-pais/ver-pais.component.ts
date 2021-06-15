import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
    this.activatedRoute.params
      .subscribe(({id}) => { // desestructuración para obtener el parametro especifico
        console.log(id);
        this.paisService.buscarPaisPorCod(id).subscribe(pais => {
          console.log(pais);
        });
      });
  }

}

// this.activatedRoute.params // este es un observable
// .subscribe(params => {
//  console.log(params); // el parametro es un id ya que en el app-routing.module se definió que el parametro es un id
// });
// }
