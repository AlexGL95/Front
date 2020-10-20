import { Component, OnInit } from '@angular/core';
import { faGripLines, faEnvelopeOpenText, faLightbulb, faExclamationTriangle, faChartLine, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { QuejaService } from 'src/app/services/queja.service';
import moment = require('moment');
import { GraficaInterface } from 'src/app/interfaces/grafica.interface';

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
  fecha2Q = moment().format('MMM Do YY');
  fecha1Q = moment().subtract(7, 'day').format('MMM Do YY');
  quejasChart: GraficaInterface = {
    title: 'Quejas',
    type: 'ColumnChart',
    data: [],
    options: {legend:'none', colors:["#2E86C1"]},
    width: 650,
    height: 400,
  }

  constructor( private quejaService: QuejaService ) {
    this.quejaService.verQuejaGraph(this.categoriaQ, this.areaQ, this.fecha1Q, this.fecha2Q).subscribe( data => {
      this.quejasChart.data = data;
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
    filtroQ( categoria: number, area: number ) {
      this.categoriaQ = categoria;
      this.areaQ = area;
      this.quejaService.verQuejaGraph(this.categoriaQ, this.areaQ, this.fecha1Q, this.fecha2Q).subscribe( data => {
        this.quejasChart.data = data;
      } );
    }

    fechaModQ( n: number ) {
      console.log(n);
    }

}
