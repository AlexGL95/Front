import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { RcInterface } from '../interfaces/reporteC.interface';

@Injectable({
  providedIn: 'root'
})
export class RcService {

  constructor( private http: HttpClient ) {}

  URL_RC = 'http://localhost:3000/rc';

  obtenerRc( categoria: number, area: number, pagina: number) {
    return this.http.get<{rcArr: RcInterface[], nSig: number}>(this.URL_RC + `/${categoria}/${area}/${pagina}`);
  }

  verRc( id: number ) {
      const httpHeaders = new HttpHeaders({
        'Content-Type': 'application/json'
      });
      const options = {
        headers: httpHeaders,
        responseType: 'blob' as 'json'
      };
      return this.http.get<any>(this.URL_RC + `/${id}`, options);
  }
  verRCGraph( categoria: number, area: number, fechaIni: string, fechaFin: string ) {
    return this.http.get<[]>(this.URL_RC + `/graph/${categoria}/${area}/` + fechaIni + '/' + fechaFin);
  }
}
