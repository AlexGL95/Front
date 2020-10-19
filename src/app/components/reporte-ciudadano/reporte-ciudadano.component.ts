import { Component, OnInit } from '@angular/core';
import { Reporte } from '../../interfaces/reporte';
import { ThrowStmt } from '@angular/compiler';
import { Colonias } from 'src/app/interfaces/colonias';
import { ReporteService } from 'src/app/services/reporte.service';

interface HtmlInputEvent extends Event{
  target: HTMLInputElement & EventTarget;
}

@Component({
  selector: 'app-reporte-ciudadano',
  templateUrl: './reporte-ciudadano.component.html',
  styleUrls: ['./reporte-ciudadano.component.css']
})
export class ReporteCiudadanoComponent implements OnInit {

  nombre = '';
  telefono = '';
  correo = '';
  codigo = '';
  reporte = '';
  crearRC = {} as Reporte;
  colonia = '';
  cols = [];
  mensajeCol = ['Colonias'];
  otromensajeCol = 'Colonias';

  file: File;
  PDFSelected: string | ArrayBuffer;

  evidencia: HTMLInputElement;

  nombreI: HTMLInputElement;
  telefonoI: HTMLInputElement;
  correoI: HTMLInputElement;
  check: HTMLInputElement;

  constructor(private reporteService: ReporteService) { }

  ngOnInit(): void {
  }

  selectCols(i: number, col: string){
    this.mensajeCol[i] = col;
    this.otromensajeCol = this.mensajeCol[i];
    this.colonia = this.otromensajeCol
  }

  encontrarColonias(){
    this.reporteService.obtenerColonias(parseInt(this.codigo)).subscribe(col => {
      this.cols = col.response.colonia;
    }, err =>
    console.log(err))
  }

  async enviar(){
    //this.quejaService.adjuntarArchivosQ(this.file).subscribe(res => console.log(res), err => console.log(err));
    if(this.codigo !== '' && this.codigo !== undefined && this.reporte !== '' && this.reporte !== undefined){
      this.crearRC.nombre = this.nombre;
      this.crearRC.telefono = this.telefono;
      this.crearRC.correo = this.correo;
      this.crearRC.cp = this.codigo;
      this.crearRC.colonia = this.colonia;
      this.crearRC.reporte = this.reporte;
      this.crearRC.categoria = 1;
      this.crearRC.area = 2;
      await this.reporteService.adjuntarArchivosRC(this.file).subscribe(res => console.log(res), err => console.log(err));
      await this.reporteService.guardarReporte(this.crearRC).subscribe(prop => {
        console.log(prop);
      }, err => 
      console.log(err));
    } else{
      console.log('error');
    }
/*
    await this.quejaService.obtenerQueja().subscribe(propuestas => {
      console.log(propuestas);
    }, err => 
    console.log(err));*/
  }

  onPDFSelect(event: HtmlInputEvent): void{
    if(event.target.files && event.target.files[0]){
      this.file = <File>event.target.files[0];
      console.log(this.file);
      this.evidencia = <HTMLInputElement> document.getElementById('evidencia');
      this.evidencia.value = this.file.name;
    }
  }

  anonimo(){
    this.check = <HTMLInputElement> document.getElementById('anonimo');
    this.nombreI = <HTMLInputElement> document.getElementById('nombre');
    this.telefonoI = <HTMLInputElement> document.getElementById('telefono');
    this.correoI = <HTMLInputElement> document.getElementById('correo');
    if(this.check.checked === true){
      this.nombreI.disabled = true;
      this.telefonoI.disabled = true;
      this.correoI.disabled = true;
      this.nombre = '';
      this.telefono = '';
      this.correo = '';
    }else{
      this.nombreI.disabled = false;
      this.telefonoI.disabled = false;
      this.correoI.disabled = false;
    }
  }

}
