// tslint:disable: typedef
import { Component, OnInit } from '@angular/core';
import { faGripLines, faEnvelopeOpenText, faLightbulb, faExclamationTriangle, faChartLine, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { QuejaService } from 'src/app/services/queja.service';
import { ToastrService } from 'ngx-toastr';
import moment = require('moment');
import { GraficaInterface } from 'src/app/interfaces/grafica.interface';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap/datepicker/datepicker.module';
import { PropuestaService } from '../../services/propuesta.service';
import { RcService } from '../../services/rc.service';
import { Router } from '@angular/router';
import { AuthserviceService } from 'src/app/services/authservice.service';

@Component({
  selector: 'app-grafica',
  templateUrl: './grafica.component.html',
  styleUrls: ['./grafica.component.css']
})
export class GraficaComponent implements OnInit {

  // Iconos
  faGripLines = faGripLines;
  faEnvelopeOpenText = faEnvelopeOpenText;
  faLightbulb = faLightbulb;
  faExclamationTriangle = faExclamationTriangle;
  faChartLine = faChartLine;
  faSignOutAlt = faSignOutAlt;

  // Variables
  bSidenavAct = false;
  categoriaQ = 0;
  areaQ = 0;
  ph = 'Sub-categoria';
  php = 'Sub-categoria';
  phrc = 'Sub-categoria';
  d1 = moment();
  fecha2Q = moment().format('MMM Do YY');
  fecha1Q = moment().subtract(7, 'day').format('MMM Do YY');
  categoriaP = 0;
  areaP = 0;
  fecha2P = moment().format('MMM Do YY');
  fecha1P = moment().subtract(7, 'day').format('MMM Do YY');
  categoriaRC = 0;
  areaRC = 0;
  fecha2RC = moment().format('MMM Do YY');
  fecha1RC = moment().subtract(7, 'day').format('MMM Do YY');
  quejasChart: GraficaInterface = {
    title: 'Quejas',
    type: 'ColumnChart',
    data: [],
    options: {legend:'none', colors:["#2E86C1"]},
    width: 650,
    height: 400,
  }
  PChart: GraficaInterface = {
    title: 'Quejas',
    type: 'ColumnChart',
    data: [],
    options: {legend:'none', colors:["#005141"]},
    width: 650,
    height: 400,
  }
  RCChart: GraficaInterface = {
    title: 'Quejas',
    type: 'ColumnChart',
    data: [],
    options: {legend:'none', colors:["#4c191f"]},
    width: 650,
    height: 400,
  }

  constructor(
    private quejaService: QuejaService,
    private propuestaservice: PropuestaService,
    private rcservice: RcService,
    private toastr: ToastrService,
    private auth: AuthserviceService,
    private router: Router,
     ) {
    this.quejaService.verQuejaGraph(this.categoriaQ, this.areaQ, this.fecha1Q, this.fecha2Q).subscribe( data => {
      this.quejasChart.data = data;
    } );
    this.propuestaservice.verPropuestaGraph(this.categoriaP, this.areaP, this.fecha1P, this.fecha2P).subscribe( data => {
      this.PChart.data = data;
    } );
    this.rcservice.verRCGraph(this.categoriaRC, this.areaRC, this.fecha1RC, this.fecha2RC).subscribe( data => {
      this.RCChart.data = data;
    } );
  }

  ngOnInit(): void {}

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

    // Pagina antigua
    filtroQ( categoria: number, area: number, ph:string ) {
      this.categoriaQ = categoria;
      this.areaQ = area;
      this.ph= ph;
      this.quejaService.verQuejaGraph(this.categoriaQ, this.areaQ, this.fecha1Q, this.fecha2Q).subscribe( data => {
        this.quejasChart.data = data;
      } );
    }

    fechaModQ( n: Date ) {
      console.log(n);
      if (n) {
        const QF = moment(n).format('MMM Do YY');
        console.log(QF);
        this.quejaService.verQuejaGraph(this.categoriaQ, this.areaQ, QF, this.fecha2Q).subscribe( data => {
      this.quejasChart.data = data;
    } );
      } else {
        this.modalerror();
      }
    }
    filtroP( categoria: number, area: number , ph: string ) {
      this.php = ph;
      this.categoriaP = categoria;
      this.areaP = area;
      this.propuestaservice.verPropuestaGraph(this.categoriaP, this.areaP, this.fecha1P, this.fecha2P).subscribe( data => {
        this.PChart.data = data;
      } );
    }

    fechaModP( n: Date ) {
      console.log(n);
      if (n) {
        const QF = moment(n).format('MMM Do YY');
        console.log(QF);
        this.propuestaservice.verPropuestaGraph(this.categoriaP, this.areaP, QF, this.fecha2P).subscribe( data => {
      this.PChart.data = data;
    } );
      } else {
        this.modalerror();
      }
    }
    filtroRC( categoria: number, area: number,ph:string ) {
      this.phrc = ph;
      this.categoriaRC = categoria;
      this.areaRC = area;
      this.rcservice.verRCGraph(this.categoriaRC, this.areaRC, this.fecha1RC, this.fecha2RC).subscribe( data => {
        this.RCChart.data = data;
      } );
    }

    fechaModRC( n: Date ) {
      console.log(n);
      if (n) {
        const QF = moment(n).format('MMM Do YY');
        console.log(QF);
        this.rcservice.verRCGraph(this.categoriaRC, this.areaRC, QF, this.fecha2RC).subscribe( data => {
      this.RCChart.data = data;
    } );
      } else {
        this.modalerror();
      }
    }

    modalerror(){
      this.toastr.error('Debe seleccionar una fecha de inicio', 'Error en Grafica', {
        timeOut: 20000,
      });
    }

    logout(){
      this.auth.logOut();
      this.router.navigate(['/Login']);
      }
}
