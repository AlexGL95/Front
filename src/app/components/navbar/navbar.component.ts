import { Component, OnInit } from '@angular/core';
import { faGripLines, faEnvelopeOpenText, faLightbulb, faExclamationTriangle, faChartLine, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { AuthserviceService } from '../../services/authservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  // Iconos
  faGripLines = faGripLines;
  faEnvelopeOpenText = faEnvelopeOpenText;
  faLightbulb = faLightbulb;
  faExclamationTriangle = faExclamationTriangle;
  faChartLine = faChartLine;
  faSignOutAlt = faSignOutAlt;

  // Variables
  bSidenavAct = false;

  constructor(
    private auth: AuthserviceService,
    private router: Router,
  ) {}

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

  // Ajusta el ancho del navbar responsivo para mostrarse, ademas que opaca la pagina principal.
  openNavResp() {
    document.getElementById("mySidenav").style.width = "380px";
    document.getElementById("botonNav").style.marginLeft = "270px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    this.bSidenavAct = true;
  }

  // Ajusta el ancho del navbar responsivo para ocultarse, ademas que aclara la pagina principal.
  closeNavResp() {
    document.getElementById("mySidenav").style.width = "140px";
    document.getElementById("botonNav").style.marginLeft = "0px";
    document.body.style.backgroundColor = "white";
    this.bSidenavAct = false;
  }

  logout(){
  this.auth.logOut();
  this.router.navigate(['/Login']);
  }

}
