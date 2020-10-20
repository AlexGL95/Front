import { Component, OnInit } from '@angular/core';
import { Queja } from '../../interfaces/queja';
import { ThrowStmt } from '@angular/compiler';
import { Colonias } from 'src/app/interfaces/colonias';
import { QuejaService } from 'src/app/services/queja.service';
import { ActivatedRoute } from '@angular/router';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'

interface HtmlInputEvent extends Event{
  target: HTMLInputElement & EventTarget;
}

@Component({
  selector: 'app-queja',
  templateUrl: './queja.component.html',
  styleUrls: ['./queja.component.css']
})
export class QuejaComponent implements OnInit {

  faChevronLeft = faChevronLeft;

  nombre = '';
  telefono = '';
  correo = '';
  codigo = '';
  queja = '';
  crearQ = {} as Queja;
  colonia = '';
  cols = [];
  mensajeCol = ['Colonias'];
  otromensajeCol = 'Colonias';

  categorias = ["Servicios", "Víalidad"];

  file: File;
  PDFSelected: string | ArrayBuffer;

  evidencia: HTMLInputElement;

  nombreI: HTMLInputElement;
  telefonoI: HTMLInputElement;
  correoI: HTMLInputElement;
  check: HTMLInputElement;
  tipo: HTMLInputElement;


  constructor(private quejaService: QuejaService,
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
    this.quejaService.obtenerColonias(parseInt(this.codigo)).subscribe(col => {
      this.cols = col.response.colonia;
    }, err =>
    console.log(err))
  }

  async enviar(){
    //this.quejaService.adjuntarArchivosQ(this.file).subscribe(res => console.log(res), err => console.log(err));
    let cat = parseInt(this.route.snapshot.paramMap.get('id'));
    let ar = parseInt(this.route.snapshot.paramMap.get('id2'));
    if(this.codigo !== '' && this.codigo !== undefined && this.queja !== '' && this.queja !== undefined){
      this.crearQ.nombre = this.nombre;
      this.crearQ.telefono = this.telefono;
      this.crearQ.correo = this.correo;
      this.crearQ.cp = this.codigo;
      this.crearQ.colonia = this.colonia;
      this.crearQ.queja = this.queja;
      this.crearQ.categoria = cat;
      this.crearQ.area = ar;
      await this.quejaService.adjuntarArchivosQ(this.file).subscribe(res => console.log(res), err => console.log(err));
      await this.quejaService.guardarQueja(this.crearQ).subscribe(prop => {
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
