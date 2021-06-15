import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PorCapitalComponent } from './pais/pages/por-capital/por-capital.component';
import { PorPaisComponent } from './pais/pages/por-pais/por-pais.component';
import { PorRegionComponent } from './pais/pages/por-region/por-region.component';
import { VerPaisComponent } from './pais/pages/ver-pais/ver-pais.component';

const routes: Routes = [ // arreglo con cada una de las rutas
  {
    path: '', // el string vacío simula la ruta del primer componente o el comp. por defecto
    component: PorPaisComponent, // debe estar importado en el app.component y exportado en su respectivo modulo
    pathMatch: 'full' // para que solo se ingrese cuando esté en la ruta por defecto, va a ser el primer componente que se va a mostrar
  },
  {
    path: 'region',
    component: PorRegionComponent
  },
  {
    path: 'capital',
    component: PorCapitalComponent
  },
  {
    path: 'pais/:id', // :id es el argumento para que la ruta sea dinamica
    component: VerPaisComponent
  },
  {
    path: '**', // cualquier ruta que no sea alguna de las definidas
    redirectTo: '' // redirige a la ruta inicial, tambien se puede crear un componenete con una página con un mensaje de error
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot( routes ) // forRoot indica las rutas principiales
  ],
  exports: [
    RouterModule // hay que exportarlo para usarlo en otras partes del proyecto
  ]
})
export class AppRoutingModule { }
