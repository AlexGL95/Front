import { Component, OnInit } from '@angular/core';
import { PropuestaService } from 'src/app/services/propuesta.service';
import { Propuesta } from '../../interfaces/propuesta';
import { ThrowStmt } from '@angular/compiler';
import { Colonias } from 'src/app/interfaces/colonias';
import { ActivatedRoute, Router } from '@angular/router';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FormControl, FormGroup, Validators } from '@angular/forms';

interface HtmlInputEvent extends Event{
  target: HTMLInputElement & EventTarget;
}

@Component({
  selector: 'app-propuesta',
  templateUrl: './propuesta.component.html',
  styleUrls: ['./propuesta.component.css']
})
export class PropuestaComponent implements OnInit {

  LoginForm: FormGroup;

  faChevronLeft = faChevronLeft;

  nombre = '';
  telefono = '';
  correo = '';
  codigo = '';
  problema = '';
  propuesta = '';
  crearP = {} as Propuesta;
  colonia = '';
  cols = [];
  mensajeCol = ['Colonias'];
  otromensajeCol = 'Colonias';
  categorias = ["Servicios", "Víalidad"];

  file: File;
  PDFSelected: string | ArrayBuffer;

  evidencia: HTMLInputElement;
  tipo: HTMLInputElement;

  exito: boolean = false;
  fracaso: boolean = false;


  constructor(private propuestaService: PropuestaService,
              private route: ActivatedRoute,
              private router: Router) { this.LoginForm = this.createFormGroup();   }

  ngOnInit(): void {

    this.route.paramMap.subscribe(param => {
      if(param.has("id") && param.has("area")){
        this.tipo = <HTMLInputElement> document.getElementById('tipo');
        this.tipo.value = `${this.categorias[parseInt(param.get("id"))-1]}-${param.get("area")}`
      }
    })

  }

  selectCols(i: number, col: string){
    this.mensajeCol[i] = col;
    this.otromensajeCol = this.mensajeCol[i];
    this.colonia = this.otromensajeCol
  }

  encontrarColonias(){
    this.propuestaService.obtenerColonias(parseInt(this.codigo)).subscribe(col => {
      this.cols = col.response.colonia;
      this.exito = true;
      this.fracaso = false;
    }, err =>
    {this.exito = false;
      this.fracaso = true;})
    
  }

  async enviar(){
    //this.propuestaService.adjuntarArchivosP(this.file).subscribe(res => console.log(res), err => console.log(err));
    let cat = parseInt(this.route.snapshot.paramMap.get('id'));
    let ar = parseInt(this.route.snapshot.paramMap.get('id2'));
    if(this.nombre !== '' && this.nombre !== undefined && this.telefono !== '' && this.telefono !== undefined && this.correo !== '' && this.correo !== undefined && this.codigo !== '' && this.codigo !== undefined && this.problema !== '' && this.problema !== undefined && this.propuesta !== '' && this.propuesta !== undefined){
      this.crearP.nombre = this.nombre;
      this.crearP.telefono = this.telefono;
      this.crearP.correo = this.correo;
      this.crearP.codigoPostal = this.codigo;
      this.crearP.colonia = this.colonia;
      this.crearP.problema = this.problema;
      this.crearP.propuesta = this.propuesta;
      this.crearP.categoria = cat;
      this.crearP.area = ar;
      await this.propuestaService.adjuntarArchivosP(this.file).subscribe(res => console.log(res), err => console.log(err));
      await this.propuestaService.guardarPropuesta(this.crearP).subscribe(prop => {
        console.log(prop);
        this.router.navigate([`Success/:${prop}`])
      }, err => 
      console.log(err));
      
    } else{
      console.log('error');
    }

  }

  onPDFSelect(event: HtmlInputEvent): void{
    if(event.target.files && event.target.files[0]){
      this.file = <File>event.target.files[0];
      console.log(this.file);
      this.evidencia = <HTMLInputElement> document.getElementById('evidencia');
      this.evidencia.value = this.file.name;
    }
  }

  createFormGroup(){
    return new FormGroup({
      email1: new FormControl('', [Validators.required, Validators.email]),
    });
  }

  get email1(){ return this.LoginForm.get('email1'); }

}
