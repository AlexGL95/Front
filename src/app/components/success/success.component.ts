import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {

  // Variables
  folio: string;
  tipo: string;

  constructor( private activatedRoute: ActivatedRoute ) {
    this.activatedRoute.params.subscribe( params => {
      this.folio = params['folio'];
      switch ( this.folio.substr(0,1) ) {
        case 'Q': {this.tipo = 'QUEJA'; break;}
        case 'P': {this.tipo = 'PROPUESTA'; break;}
        case 'R': {this.tipo = 'REPORTE'; break;}
        default: {break;}
      }
    } );
  }

  ngOnInit(): void {
  }



}
