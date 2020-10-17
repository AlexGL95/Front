import { Component, OnInit } from '@angular/core';
import { faGripLines, faEnvelopeOpenText, faLightbulb, faExclamationTriangle, faChartLine, faSignOutAlt, faAngleDoubleLeft, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import { QuejaService } from 'src/app/services/queja.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { QuejaInterface } from "src/app/interfaces/queja.interface";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-queja-lista',
  templateUrl: './queja-lista.component.html',
  styleUrls: ['./queja-lista.component.css']
})
export class QuejaListaComponent implements OnInit {

  // Iconos
  faGripLines = faGripLines;
  faEnvelopeOpenText = faEnvelopeOpenText;
  faLightbulb = faLightbulb;
  faExclamationTriangle = faExclamationTriangle;
  faChartLine = faChartLine;
  faSignOutAlt = faSignOutAlt;
  faAngleDoubleLeft = faAngleDoubleLeft;
  faAngleDoubleRight = faAngleDoubleRight;

  // Variables
  bSidenavAct = false;
  bSinCoincidencias = false;
  quejasArr: QuejaInterface[] = [];
  nPagSig: number;
  categoriaActual = 0;
  areaActual = 0;
  paginaActual = 1;
  quejaActual: string;
  pdfActual;

  constructor(
    private quejaService: QuejaService,
    private modalService: NgbModal,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.params.subscribe( params => {
      this.categoriaActual = params['categoria'];
    } );
    quejaService.obtenerQueja(this.categoriaActual,this.areaActual,this.paginaActual).subscribe( quejas => {
      this.quejasArr = quejas.rcArr;
      this.nPagSig = quejas.nSig;
      if(quejas.rcArr.length === 0) {
        this.bSinCoincidencias = true;
      } else {
        this.bSinCoincidencias = false;
      }
    });
  }

  ngOnInit(): void {}

  /* Navbar */
    // Ajusta el ancho del navbar para mostrarse, ademas que desplaza la pagina principal.
    openNav() {
      document.getElementById("mySidenav").style.width = "280px";
      document.getElementById("main").style.marginLeft = "280px";
      this.bSidenavAct = true;
    }

    // Ajusta el ancho del navbar para ocultarse, ademas que desplaza la pagina principal.
    closeNav() {
      document.getElementById("mySidenav").style.width = "100px";
      document.getElementById("main").style.marginLeft = "100px";
      this.bSidenavAct = false;
    }

  /* Cuerpo de la pagina */
    // Pagina siguiente
    paginaSig() {
      this.paginaActual += 1;
      this.quejaService.obtenerQueja(this.categoriaActual,this.areaActual,this.paginaActual).subscribe( quejas => {
        this.quejasArr = quejas.rcArr;
        this.nPagSig = quejas.nSig;
      });
    }

    // Pagina siguiente
    paginaAnt() {
      this.paginaActual -= 1;
      this.quejaService.obtenerQueja(this.categoriaActual,this.areaActual,this.paginaActual).subscribe( quejas => {
        this.quejasArr = quejas.rcArr;
        this.nPagSig = quejas.nSig;
      });
    }

    // Pagina proxima
    paginaNext( offset: number ) {
      this.paginaActual += offset;
      this.quejaService.obtenerQueja(this.categoriaActual,this.areaActual,this.paginaActual).subscribe( quejas => {
        this.quejasArr = quejas.rcArr;
        this.nPagSig = quejas.nSig;
      });
    }

    // Pagina antigua
    paginaBack( offset: number ) {
      this.paginaActual -= offset;
      this.quejaService.obtenerQueja(this.categoriaActual,this.areaActual,this.paginaActual).subscribe( quejas => {
        this.quejasArr = quejas.rcArr;
        this.nPagSig = quejas.nSig;
      });
    }

    // Pagina antigua
    filtro( categoria: number, area: number ) {
      this.categoriaActual = categoria;
      this.areaActual = area;
      this.quejaService.obtenerQueja(this.categoriaActual,this.areaActual,this.paginaActual).subscribe( quejas => {
        this.quejasArr = quejas.rcArr;
        this.nPagSig = quejas.nSig;
        if(quejas.rcArr.length === 0) {
          this.bSinCoincidencias = true;
        } else {
          this.bSinCoincidencias = false;
        }
      });
    }

    // Ver
    ver( pos: number, contenido ) {
        this.quejaService.verQueja( this.quejasArr[pos].id )
          .subscribe(
            data => {
              const file = new Blob([data], { type: 'application/pdf' });
              this.pdfActual = URL.createObjectURL(file);
              this.abrirModal(contenido)
              //window.open(fileURL);
            }
          );
    }

    abrirModal( contenido ) {
      this.modalService.open( contenido, { centered: true, size: 'lg' } ).result;
    }

}
