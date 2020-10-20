// tslint:disable: typedef
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { usuariomodel } from 'src/app/Models/Usuario.model';
import { AuthserviceService } from '../../services/authservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  faEyeSlash = faEyeSlash;
  LoginForm: FormGroup;
  user: usuariomodel;

  constructor(
    private auth: AuthserviceService,
    private router: Router,
  ) {
    this.LoginForm = this.createFormGroup();
   }

  ngOnInit(): void {
  }

  singup( correo: string, pass: string){
    if (this.LoginForm.valid) {
        this.user = {
        correo,
        pass
      };
        this.auth.logIn(this.user).subscribe(
          (resp) => {
            this.router.navigate(['/QuejaAdmi']);
          },
          (err) => {}
          );
    } else {

    }
  }

  createFormGroup(){
    return new FormGroup({
      usuario: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(15)]),
    });
  }

  get usuario(){ return this.LoginForm.get('usuario'); }
  get password(){ return this.LoginForm.get('password'); }

}
