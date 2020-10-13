import { Component, OnInit } from '@angular/core';
import { faGripLines } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  //Variables
  bSidenavAct = false;
  // Iconos
  faGripLines = faGripLines;

  constructor() { }

  ngOnInit(): void {
  }

  // Ajusta el ancho del navbar para mostrarse, ademas que desplaza la pagina principal.
  openNav() {
    document.getElementById("mySidenav").style.width = "300px";
    document.getElementById("main").style.marginLeft = "300px";
    this.bSidenavAct = true;
  }

  // Ajusta el ancho del navbar para ocultarse, ademas que desplaza la pagina principal.
  closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    this.bSidenavAct = false;
  }

}