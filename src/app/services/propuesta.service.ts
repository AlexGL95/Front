import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Propuesta } from '../interfaces/propuesta';
import { Colonias } from '../interfaces/colonias';
import { PropuestaInterface } from '../interfaces/propuesta.interface';

@Injectable({
  providedIn: 'root'
})
export class PropuestaService {

  URIpropuesta = 'http://localhost:3000/propuesta';
  URIcategoria = 'http://localhost:3000/categoria';
  URIsempomex = 'https://api-sepomex.hckdrk.mx/query/get_colonia_por_cp'

  constructor(private http: HttpClient) { }

  obtenerPropuesta( categoria: number, area: number, pagina: number) {
    return this.http.get<{rcArr: PropuestaInterface[], nSig: number}>(this.URIpropuesta + `/${categoria}/${area}/${pagina}`);
  }

  verPropuesta( id: number ) {
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    const options = {
      headers: httpHeaders,
      responseType: 'blob' as 'json'
    };
    return this.http.get<any>(this.URIpropuesta + `/${id}`, options);
  }

  guardarPropuesta(propuesta: Propuesta){
    return this.http.post(this.URIpropuesta, propuesta);
  }

  adjuntarArchivosP(file: File){
    const fd = new FormData();
    fd.append('evidencia', file);
    return this.http.post(`${this.URIpropuesta}/filesP`, fd);
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

}
