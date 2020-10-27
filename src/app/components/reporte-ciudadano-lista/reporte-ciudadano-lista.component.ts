import { Component, OnInit } from '@angular/core';
import { faGripLines, faEnvelopeOpenText, faLightbulb, faExclamationTriangle, faChartLine, faSignOutAlt, faAngleDoubleLeft, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import { RcService } from 'src/app/services/rc.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { RcInterface } from "src/app/interfaces/reporteC.interface";
import { ActivatedRoute, Router } from '@angular/router';
import { AuthserviceService } from 'src/app/services/authservice.service';

@Component({
  selector: 'app-reporte-ciudadano-lista',
  templateUrl: './reporte-ciudadano-lista.component.html',
  styleUrls: ['./reporte-ciudadano-lista.component.css']
})
export class ReporteCiudadanoListaComponent implements OnInit {

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
  rcArr: RcInterface[] = [];
  nPagSig: number;
  categoriaActual = 0;
  areaActual = 0;
  paginaActual = 1;
  rcActual: string;
  pdfActual;
  etiqueta = 'Sub-Categoría';

  constructor(
    private rcService: RcService,
    private modalService: NgbModal,
    private activatedRoute: ActivatedRoute,
    private auth: AuthserviceService,
    private router: Router,
  ) {
    this.activatedRoute.params.subscribe( params => {
      this.categoriaActual = params['categoria'];
    } );
    rcService.obtenerRc(this.categoriaActual,this.areaActual,this.paginaActual).subscribe( rcs => {
      this.rcArr = rcs.rcArr;
      this.nPagSig = rcs.nSig;
      if(rcs.rcArr.length === 0) {
        this.bSinCoincidencias = true;
      } else {
        this.bSinCoincidencias = false;
      }
    } );
}
logout(){
  this.auth.logOut();
  this.router.navigate(['/Login']);
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

    // Ajusta el ancho del navbar responsivo para mostrarse, ademas que opaca la pagina principal.
    openNavResp() {
      document.getElementById("mySidenav").style.width = "380px";
      document.getElementById("botonNav").style.marginLeft = "270px";
      this.bSidenavAct = true;
    }

    // Ajusta el ancho del navbar responsivo para ocultarse, ademas que aclara la pagina principal.
    closeNavResp() {
      document.getElementById("mySidenav").style.width = "140px";
      document.getElementById("botonNav").style.marginLeft = "0px";
      this.bSidenavAct = false;
    }

  /* Cuerpo de la pagina */
    // Pagina siguiente
    paginaSig() {
      this.paginaActual += 1;
      this.rcService.obtenerRc(this.categoriaActual,this.areaActual,this.paginaActual).subscribe( rcs => {
        this.rcArr = rcs.rcArr;
        this.nPagSig = rcs.nSig;
      });
    }

    // Pagina siguiente
    paginaAnt() {
      this.paginaActual -= 1;
      this.rcService.obtenerRc(this.categoriaActual,this.areaActual,this.paginaActual).subscribe( rcs => {
        this.rcArr = rcs.rcArr;
        this.nPagSig = rcs.nSig;
      });
    }

    // Pagina proxima
    paginaNext( offset: number ) {
      this.paginaActual += offset;
      this.rcService.obtenerRc(this.categoriaActual,this.areaActual,this.paginaActual).subscribe( rcs => {
        this.rcArr = rcs.rcArr;
        this.nPagSig = rcs.nSig;
      });
    }

    // Pagina antigua
    paginaBack( offset: number ) {
      this.paginaActual -= offset;
      this.rcService.obtenerRc(this.categoriaActual,this.areaActual,this.paginaActual).subscribe( rcs => {
        this.rcArr = rcs.rcArr;
        this.nPagSig = rcs.nSig;
      });
    }

    // Pagina antigua
    filtro( categoria: number, area: number, etiqueta: string ) {
      this.etiqueta = etiqueta;
      this.areaActual = area;
      this.paginaActual = 1;
      this.rcService.obtenerRc(this.categoriaActual,this.areaActual,this.paginaActual).subscribe( rcs => {
        this.rcArr = rcs.rcArr;
        this.nPagSig = rcs.nSig;
        if(rcs.rcArr.length === 0) {
          this.bSinCoincidencias = true;
        } else {
          this.bSinCoincidencias = false;
        }
      });
    }

    // Ver
    ver( pos: number, contenido ) {
        this.rcService.verRc( this.rcArr[pos].id )
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
