import { Component, OnInit } from '@angular/core';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'app-queja-card',
  templateUrl: './queja-card.component.html',
  styleUrls: ['./queja-card.component.css']
})
export class QuejaCardComponent implements OnInit {

  faChevronLeft = faChevronLeft;
  constructor() { }

  ngOnInit(): void {
  }

}
