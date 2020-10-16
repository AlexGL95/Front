import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { QuejaInterface } from '../interfaces/queja.interface';

@Injectable({
  providedIn: 'root'
})
export class QuejaService {

  constructor( private http: HttpClient ) {}

  URL_QUEJAS = 'http://localhost:3000/queja';

  obtenerQueja( categoria: number, area: number, pagina: number) {
    return this.http.get<{rcArr: QuejaInterface[], nSig: number}>(this.URL_QUEJAS + `/${categoria}/${area}/${pagina}`);
  }

  verQueja( id: number ) {
    return this.http.get<string>(this.URL_QUEJAS + `/${id}`);
  }

}
