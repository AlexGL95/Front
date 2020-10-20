import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthserviceService } from './services/authservice.service';
import {
  Router,
  CanActivate,
} from '@angular/router';


@Injectable({ providedIn: 'root' })
export class LogGuard implements CanActivate {
  constructor(
    private router: Router,
    private auth: AuthserviceService
  ) {}

  aut: boolean;

canActivate(){
  let user = this.auth.leercorreo();
  if (user) {
    this.router.navigate(['/QuejaAdmi']);
    return false;
  } else {
    return true;
  }

}
}
