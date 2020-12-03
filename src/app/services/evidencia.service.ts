import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class EvidenciaService {
  URIpropuesta = 'http://18.222.78.194:3001/propuesta';
  URIqueja = 'http://18.222.78.194:3001/queja';
  URIreporte = 'http://18.222.78.194:3001/rc';

  constructor(private http: HttpClient) { }

  verEvidenciaP( folio: string ) {
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    const options = {
      headers: httpHeaders,
      responseType: 'blob' as 'json'
    };
    return this.http.get<any>(`${this.URIpropuesta}/verP/${folio}`, options);
  }

  verEvidenciaQ( folio: string ) {
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    const options = {
      headers: httpHeaders,
      responseType: 'blob' as 'json'
    };
    return this.http.get<any>(`${this.URIqueja}/verQ/${folio}`, options);
  }

  verEvidenciaRC( folio: string ) {
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    const options = {
      headers: httpHeaders,
      responseType: 'blob' as 'json'
    };
    return this.http.get<any>(`${this.URIreporte}/verRC/${folio}`, options);
  }

}
