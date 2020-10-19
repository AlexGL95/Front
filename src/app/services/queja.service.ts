import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Queja } from '../interfaces/queja';
import { Colonias } from '../interfaces/colonias';

@Injectable({
  providedIn: 'root'
})
export class QuejaService {

  URIqueja = 'http://localhost:3000/queja';
  URIcategoria = 'http://localhost:3000/categoria';
  URIsempomex = 'https://api-sepomex.hckdrk.mx/query/get_colonia_por_cp'

  constructor(private http: HttpClient) { }

  guardarQueja(queja: Queja){
    return this.http.post(this.URIqueja, queja);
  }

  adjuntarArchivosQ(file: File){
    const fd = new FormData();
    fd.append('evidencia', file);
    return this.http.post(`${this.URIqueja}/filesQ`, fd);
  }

  obtenerColonias(codigo: number){
    return this.http.get<Colonias>(`${this.URIsempomex}/${codigo}`)
  }

  obtenerQueja(){
    return this.http.get(this.URIqueja);
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
