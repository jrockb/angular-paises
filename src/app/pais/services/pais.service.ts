import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pais } from '../interfaces/paises-interface';

@Injectable({
  providedIn: 'root' // ya está proveido como root así hay un acceso global a este servicio
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.eu/rest/v2';

  constructor(private http: HttpClient){ }

  // metodo que realiza la petición http al servicio rest para buscar país
  buscarPais(termino: string): Observable<Pais[]> {

    const url = `${this.apiUrl}/name/${termino}`;
    // se puede usar un subscribe pero no se necsita retornar la información dentro del servicio
    // sino al elemento que llamó al método del servicio
    return this.http.get<Pais[]>(url); // va retornar un observable, generico con arreglo de tipo Pais
  }

  // metodo que realiza la petición http al servicio rest para buscar país por capital
  buscarCapital(termino: string): Observable<Pais[]> {
    const url = `${this.apiUrl}/capital/${termino}`;
    return this.http.get<Pais[]>(url);
  }

  // metodo que realiza la petición http al servicio rest para buscar país por el codigo
  buscarPaisPorCod(id: string): Observable<Pais[]> {
    const url = `${this.apiUrl}/alpha/${id}`;
    return this.http.get<Pais[]>(url);
  }

}
