import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { QuejaInterface } from '../interfaces/queja.interface';

@Injectable({
  providedIn: 'root'
})
export class QuejaService {

  constructor( private http: HttpClient ) {}

  URL_QUEJAS = 'http://localhost:3000/queja';

  obtenerQueja( categoria: number, area: number, pagina: number ) {
    return this.http.get<{rcArr: QuejaInterface[], nSig: number}>(this.URL_QUEJAS + `/${categoria}/${area}/${pagina}`);
  }

  verQueja( id: number ) {
      const httpHeaders = new HttpHeaders({
        'Content-Type': 'application/json'
      });
      const options = {
        headers: httpHeaders,
        responseType: 'blob' as 'json'
      };
      return this.http.get<any>(this.URL_QUEJAS + `/${id}`, options);
  }

  verQuejaGraph( categoria: number, area: number, fechaIni: string, fechaFin: string ) {
    return this.http.get<[]>(this.URL_QUEJAS + `/graph/${categoria}/${area}/` + fechaIni + '/' + fechaFin);
  }

}
