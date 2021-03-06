// tslint:disable: typedef
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Queja } from '../interfaces/queja';
import { Colonias } from '../interfaces/colonias';
import { QuejaInterface } from '../interfaces/queja.interface';

@Injectable({
  providedIn: 'root'
})
export class QuejaService {

  URIqueja = 'http://18.222.78.194:3001/queja';
  URIcategoria = 'http://18.222.78.194:3001/categoria';
  URIsempomex = 'https://api-sepomex.hckdrk.mx/query/get_colonia_por_cp'

  constructor(private http: HttpClient) { }

  guardarQueja(queja: Queja){
    return this.http.post(this.URIqueja, queja);
  }

  verQueja( id: number ) {
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    const options = {
      headers: httpHeaders,
      responseType: 'blob' as 'json'
    };
    return this.http.get<any>(this.URIqueja + `/${id}`, options);
}

  obtenerQueja( categoria: number, area: number, pagina: number) {
    return this.http.get<{rcArr: QuejaInterface[], nSig: number}>(this.URIqueja + `/${categoria}/${area}/${pagina}`);
  }

  adjuntarArchivosQ(file: File){
    const fd = new FormData();
    fd.append('evidencia', file);
    return this.http.post(`${this.URIqueja}/filesQ`, fd);
  }

  obtenerColonias(codigo: number){
    return this.http.get<Colonias>(`${this.URIsempomex}/${codigo}`)
  }

  obtenerCategorias(){
    return this.http.get(this.URIcategoria);
  }

  obtenerAreasP(){
    return this.http.get(`${this.URIcategoria}/areap`)
  }

  obtenerAreasQ(){
    return this.http.get(`${this.URIcategoria}/areaq`)
  }

  obtenerAreasRC(){
    return this.http.get(`${this.URIcategoria}/arearc`)
  }

  verQuejaGraph( categoria: number, area: number, fechaIni: string, fechaFin: string ) {
    return this.http.get<[]>(this.URIqueja + `/graph/${categoria}/${area}/` + fechaIni + '/' + fechaFin);
  }
}