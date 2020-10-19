import { Component, OnInit } from '@angular/core';
import { faGripLines, faEnvelopeOpenText, faLightbulb, faExclamationTriangle, faChartLine, faSignOutAlt, faAngleDoubleLeft, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import { PropuestaService } from 'src/app/services/propuesta.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { PropuestaInterface } from "src/app/interfaces/propuesta.interface";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-propuesta-lista',
  templateUrl: './propuesta-lista.component.html',
  styleUrls: ['./propuesta-lista.component.css']
})
export class PropuestaListaComponent implements OnInit {

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
  propuestasArr: PropuestaInterface[] = [];
  nPagSig: number;
  categoriaActual = 0;
  areaActual = 0;
  paginaActual = 1;
  propuestaActual: string;
  pdfActual;

  constructor(
    private propuestaService: PropuestaService,
    private modalService: NgbModal,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.params.subscribe( params => {
      this.categoriaActual = params['categoria'];
    } );
    propuestaService.obtenerPropuesta(this.categoriaActual,this.areaActual,this.paginaActual).subscribe( propuestas => {
      this.propuestasArr = propuestas.rcArr;
      this.nPagSig = propuestas.nSig;
      if(propuestas.rcArr.length === 0) {
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
      this.propuestaService.obtenerPropuesta(this.categoriaActual,this.areaActual,this.paginaActual).subscribe( propuestas => {
        this.propuestasArr = propuestas.rcArr;
        this.nPagSig = propuestas.nSig;
      });
    }

    // Pagina siguiente
    paginaAnt() {
      this.paginaActual -= 1;
      this.propuestaService.obtenerPropuesta(this.categoriaActual,this.areaActual,this.paginaActual).subscribe( propuestas => {
        this.propuestasArr = propuestas.rcArr;
        this.nPagSig = propuestas.nSig;
      });
    }

    // Pagina proxima
    paginaNext( offset: number ) {
      this.paginaActual += offset;
      this.propuestaService.obtenerPropuesta(this.categoriaActual,this.areaActual,this.paginaActual).subscribe( propuestas => {
        this.propuestasArr = propuestas.rcArr;
        this.nPagSig = propuestas.nSig;
      });
    }

    // Pagina antigua
    paginaBack( offset: number ) {
      this.paginaActual -= offset;
      this.propuestaService.obtenerPropuesta(this.categoriaActual,this.areaActual,this.paginaActual).subscribe( propuestas => {
        this.propuestasArr = propuestas.rcArr;
        this.nPagSig = propuestas.nSig;
      });
    }

    // Pagina antigua
    filtro( categoria: number, area: number ) {
      this.categoriaActual = categoria;
      this.areaActual = area;
      this.paginaActual = 1;
      this.propuestaService.obtenerPropuesta(this.categoriaActual,this.areaActual,this.paginaActual).subscribe( propuestas => {
        this.propuestasArr = propuestas.rcArr;
        this.nPagSig = propuestas.nSig;
        if(propuestas.rcArr.length === 0) {
          this.bSinCoincidencias = true;
        } else {
          this.bSinCoincidencias = false;
        }
      });
    }

    // Ver
    ver( pos: number, contenido ) {
        this.propuestaService.verPropuesta( this.propuestasArr[pos].id )
          .subscribe(
            data => {
              const file = new Blob([data], { type: 'application/pdf' });
              this.pdfActual = URL.createObjectURL(file);
              this.abrirModal(contenido)
              //window.open(this.pdfActual);
            }
          );
    }

    abrirModal( contenido ) {
      this.modalService.open( contenido, { centered: true, size: 'lg' } ).result;
    }

}
