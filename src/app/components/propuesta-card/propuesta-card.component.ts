import { Component, OnInit } from '@angular/core';
import { faChevronLeft, faChevronRight, faCertificate } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-propuesta-card',
  templateUrl: './propuesta-card.component.html',
  styleUrls: ['./propuesta-card.component.css']
})
export class PropuestaCardComponent implements OnInit {
  faChevronLeft = faChevronLeft;
  faChevronRight = faChevronRight;
  faCertificate = faCertificate;
  constructor() { }

  ngOnInit(): void {
  }

}
