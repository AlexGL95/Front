// tslint:disable: typedef
import { Injectable } from '@angular/core';
import { AuthserviceService } from './services/authservice.service';
import { Observable } from 'rxjs';
import {
  Router,
  CanActivate,
} from '@angular/router';
import { catchError, map } from 'rxjs/operators';
import { async } from '@angular/core/testing';


@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private auth: AuthserviceService
  ) {}

  aut: boolean;

canActivate(){
 return this.auth.verify().pipe(map((res) => {
    if (res) {
        return true;
    } else {
      this.auth.logOut();
      this.router.navigate(['/Login']);
      return false;
    }
    }));

}

}
