// tslint:disable: no-string-literal
// tslint:disable: typedef
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { usuariomodel } from '../Models/Usuario.model';
import { catchError, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {
  private url = 'http://localhost:3000';
  usertoken: string;
  correo: string;


  logOut(){
    localStorage.removeItem('token');
    localStorage.removeItem('correo');
  }

  logIn(usuario: usuariomodel){
    const authData = { // payload para Log in de usuarios
      ...usuario,
      returnsecuretoken: true
    };
    console.log(authData);
    return this.http.post(`${this.url}/auth/signin`,
    authData).pipe(
      map(resp => {
        this.storetoken( resp['token']);
        this.storecorreo( resp['correo']);
        return resp;
      })
    );


  }

  verify(): Observable<boolean> {
      const TOKEN = this.leertoker();
      const corr = this.leercorreo();
      const params = {
        correo: corr,
      };
      const header = {
        headers: new HttpHeaders()
          .set('Authorization',  `Bearer ${TOKEN}`),
      };
      return this.http.post<{ autorized: boolean; }>(`${this.url}/auth/upd`, params, header).pipe(map(
        resp => {
          this.storetoken( resp['token']);
          return true;
        }), catchError( async () => false ));
    }

  private storetoken( idtoken: string){

    this.usertoken = idtoken;
    localStorage.setItem('token', idtoken);

  }


  leertoker(){
    if (localStorage.getItem('token')){
      this.usertoken = localStorage.getItem('token');
    }else{
      this.usertoken = '';
    }
    return this.usertoken;
  }

  private storecorreo( correo: string){

    this.correo = correo;
    localStorage.setItem('correo', this.correo);

  }

  leercorreo(){
    if (localStorage.getItem('correo')){
      this.correo = localStorage.getItem('correo');
    }else{
      this.correo = '';
    }
    return this.correo;
  }

  constructor(
    private http: HttpClient,
  ) { }
}
