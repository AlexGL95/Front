import { Component, OnInit } from '@angular/core';
import { Reporte } from '../../interfaces/reporte';
import { ThrowStmt } from '@angular/compiler';
import { Colonias } from 'src/app/interfaces/colonias';
import { ReporteService } from 'src/app/services/reporte.service';
import { ActivatedRoute } from '@angular/router';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'

interface HtmlInputEvent extends Event{
  target: HTMLInputElement & EventTarget;
}

@Component({
  selector: 'app-reporte-ciudadano',
  templateUrl: './reporte-ciudadano.component.html',
  styleUrls: ['./reporte-ciudadano.component.css']
})
export class ReporteCiudadanoComponent implements OnInit {

  faChevronLeft = faChevronLeft;

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
  categorias = ["", "", "Seguridad", "Protección Civil"];

  file: File;
  PDFSelected: string | ArrayBuffer;

  evidencia: HTMLInputElement;

  nombreI: HTMLInputElement;
  telefonoI: HTMLInputElement;
  correoI: HTMLInputElement;
  check: HTMLInputElement;

  tipo: HTMLInputElement;

  constructor(private reporteService: ReporteService,
              private route: ActivatedRoute) { }

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
    this.reporteService.obtenerColonias(parseInt(this.codigo)).subscribe(col => {
      this.cols = col.response.colonia;
    }, err =>
    console.log(err))
  }

  async enviar(){
    //this.quejaService.adjuntarArchivosQ(this.file).subscribe(res => console.log(res), err => console.log(err));
    let cat = parseInt(this.route.snapshot.paramMap.get('id'));
    let ar = parseInt(this.route.snapshot.paramMap.get('id2'));
    if(this.codigo !== '' && this.codigo !== undefined && this.reporte !== '' && this.reporte !== undefined){
      this.crearRC.nombre = this.nombre;
      this.crearRC.telefono = this.telefono;
      this.crearRC.correo = this.correo;
      this.crearRC.cp = this.codigo;
      this.crearRC.colonia = this.colonia;
      this.crearRC.reporte = this.reporte;
      this.crearRC.categoria = cat;
      this.crearRC.area = ar;
      await this.reporteService.adjuntarArchivosRC(this.file).subscribe(res => console.log(res), err => console.log(err));
      await this.reporteService.guardarReporte(this.crearRC).subscribe(prop => {
        console.log(prop);
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
