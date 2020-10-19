import { Component, OnInit } from '@angular/core';
import { PropuestaService } from 'src/app/services/propuesta.service';
import { Propuesta } from '../../interfaces/propuesta';
import { ThrowStmt } from '@angular/compiler';
import { Colonias } from 'src/app/interfaces/colonias';

interface HtmlInputEvent extends Event{
  target: HTMLInputElement & EventTarget;
}

@Component({
  selector: 'app-propuesta',
  templateUrl: './propuesta.component.html',
  styleUrls: ['./propuesta.component.css']
})
export class PropuestaComponent implements OnInit {

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

  file: File;
  PDFSelected: string | ArrayBuffer;

  evidencia: HTMLInputElement;

  constructor(private propuestaService: PropuestaService) { }

  ngOnInit(): void {
  }

  selectCols(i: number, col: string){
    this.mensajeCol[i] = col;
    this.otromensajeCol = this.mensajeCol[i];
    this.colonia = this.otromensajeCol
  }

  encontrarColonias(){
    this.propuestaService.obtenerColonias(parseInt(this.codigo)).subscribe(col => {
      this.cols = col.response.colonia;
    }, err =>
    console.log(err))
  }

  async enviar(){
    //this.propuestaService.adjuntarArchivosP(this.file).subscribe(res => console.log(res), err => console.log(err));
    
    if(this.nombre !== '' && this.nombre !== undefined && this.telefono !== '' && this.telefono !== undefined && this.correo !== '' && this.correo !== undefined && this.codigo !== '' && this.codigo !== undefined && this.problema !== '' && this.problema !== undefined && this.propuesta !== '' && this.propuesta !== undefined){
      this.crearP.nombre = this.nombre;
      this.crearP.telefono = this.telefono;
      this.crearP.correo = this.correo;
      this.crearP.codigoPostal = this.codigo;
      this.crearP.colonia = this.colonia;
      this.crearP.problema = this.problema;
      this.crearP.propuesta = this.propuesta;
      this.crearP.categoria = 1;
      this.crearP.area = 2;
      await this.propuestaService.adjuntarArchivosP(this.file).subscribe(res => console.log(res), err => console.log(err));
      await this.propuestaService.guardarPropuesta(this.crearP).subscribe(prop => {
        console.log(prop);
      }, err => 
      console.log(err));
    } else{
      console.log('error');
    }

    await this.propuestaService.obtenerPropuesta().subscribe(propuestas => {
      console.log(propuestas);
    }, err => 
    console.log(err));
  }

  onPDFSelect(event: HtmlInputEvent): void{
    if(event.target.files && event.target.files[0]){
      this.file = <File>event.target.files[0];
      console.log(this.file);
      this.evidencia = <HTMLInputElement> document.getElementById('evidencia');
      this.evidencia.value = this.file.name;
    }
  }

}
