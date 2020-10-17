import { Component, OnInit } from '@angular/core';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-reporte-ciudadano-card',
  templateUrl: './reporte-ciudadano-card.component.html',
  styleUrls: ['./reporte-ciudadano-card.component.css']
})
export class ReporteCiudadanoCardComponent implements OnInit {
  faChevronLeft = faChevronLeft;
  constructor() { }

  ngOnInit(): void {
  }

}
