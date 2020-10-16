import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class QuejaService {

  constructor( private http: HttpClient ) {}

  URL_QUEJAS = 'http://localhost:3000/equipos';

  getEquipos() {
    return this.http.get(this.URL_QUEJAS);
  }

}
