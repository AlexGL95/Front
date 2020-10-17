import { Component, OnInit } from '@angular/core';
import { faGripLines, faEnvelopeOpenText, faLightbulb, faExclamationTriangle, faChartLine, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-propuesta-admi',
  templateUrl: './propuesta-admi.component.html',
  styleUrls: ['./propuesta-admi.component.css']
})
export class PropuestaAdmiComponent implements OnInit {

  // Iconos
  faGripLines = faGripLines;
  faEnvelopeOpenText = faEnvelopeOpenText;
  faLightbulb = faLightbulb;
  faExclamationTriangle = faExclamationTriangle;
  faChartLine = faChartLine;
  faSignOutAlt = faSignOutAlt;

  // Variables
  bSidenavAct = false;

  constructor() { }

  ngOnInit(): void {
  }

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

}
