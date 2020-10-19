import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Propuesta } from '../interfaces/propuesta';
import { Colonias } from '../interfaces/colonias';

@Injectable({
  providedIn: 'root'
})
export class PropuestaService {

  URIpropuesta = 'http://localhost:3000/propuesta';
  URIcategoria = 'http://localhost:3000/categoria';
  URIsempomex = 'https://api-sepomex.hckdrk.mx/query/get_colonia_por_cp'

  constructor(private http: HttpClient) { }

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

  obtenerPropuesta(){
    return this.http.get(this.URIpropuesta);
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
