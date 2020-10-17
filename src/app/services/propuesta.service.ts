import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { PropuestaInterface } from '../interfaces/propuesta.interface';

@Injectable({
  providedIn: 'root'
})
export class PropuestaService {

  constructor( private http: HttpClient ) {}

  URL_PROPUESTAS = 'http://localhost:3000/propuesta';

  obtenerPropuesta( categoria: number, area: number, pagina: number) {
    return this.http.get<{rcArr: PropuestaInterface[], nSig: number}>(this.URL_PROPUESTAS + `/${categoria}/${area}/${pagina}`);
  }

  verPropuesta( id: number ) {
      const httpHeaders = new HttpHeaders({
        'Content-Type': 'application/json'
      });
      const options = {
        headers: httpHeaders,
        responseType: 'blob' as 'json'
      };
      return this.http.get<any>(this.URL_PROPUESTAS + `/${id}`, options);
  }

}
