import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class EvidenciaService {

  URIpropuesta = 'http://localhost:3000/propuesta';

  constructor(private http: HttpClient) { }

  verEvidencia( folio: string ) {
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    const options = {
      headers: httpHeaders,
      responseType: 'blob' as 'json'
    };
    return this.http.get<any>(`${this.URIpropuesta}/ver/${folio}`, options);
  }
}
