import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class EvidenciaService {

  URIpropuesta = 'http://localhost:3000/propuesta';

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
    return this.http.get<any>(`${this.URIpropuesta}/verQ/${folio}`, options);
  }

  verEvidenciaRC( folio: string ) {
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    const options = {
      headers: httpHeaders,
      responseType: 'blob' as 'json'
    };
    return this.http.get<any>(`${this.URIpropuesta}/verRC/${folio}`, options);
  }

}
