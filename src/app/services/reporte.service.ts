import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Reporte } from '../interfaces/reporte';
import { Colonias } from '../interfaces/colonias';

@Injectable( {
  providedIn: 'root'
} )
export class ReporteService {

  URIreporte = 'http://localhost:3000/rc';
  URIcategoria = 'http://localhost:3000/categoria';
  URIsempomex = 'https://api-sepomex.hckdrk.mx/query/get_colonia_por_cp'

  constructor( private http: HttpClient ) { }

  guardarReporte( reporte: Reporte ) {
    return this.http.post( this.URIreporte, reporte );
  }

  adjuntarArchivosRC( file: File ) {
    const fd = new FormData();
    fd.append( 'evidencia', file );
    return this.http.post( `${this.URIreporte}/filesRC`, fd );
  }

  obtenerColonias( codigo: number ) {
    return this.http.get<Colonias>( `${this.URIsempomex}/${codigo}` )
  }

  obtenerReporte() {
    return this.http.get( this.URIreporte );
  }

  obtenerCategorias() {
    return this.http.get( this.URIcategoria );
  }

  obtenerAreasP() {
    return this.http.get( `${this.URIcategoria}/areap` )
  }

  obtenerAreasQ() {
    return this.http.get( `${this.URIcategoria}/areaq` )
  }

  obtenerAreasRC() {
    return this.http.get( `${this.URIcategoria}/arearc` )
  }

}
