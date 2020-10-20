import { Component, OnInit } from '@angular/core';
import { EvidenciaService } from 'src/app/services/evidencia.service';
import { ActivatedRoute } from '@angular/router';
import * as fs from 'file-system';

@Component({
  selector: 'app-evidencia-p',
  templateUrl: './evidencia-p.component.html',
  styleUrls: ['./evidencia-p.component.css']
})
export class EvidenciaPComponent implements OnInit {

  eviActual;

  constructor(private evidenciaService: EvidenciaService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    let evi = this.route.snapshot.paramMap.get('folio');
    this.evidenciaService.verEvidencia( evi )
      .subscribe(
        data => {
          const file = new Blob([data.body], { type: 'application/pdf' });
          console.log(data, file);
          this.eviActual = window.URL.createObjectURL(file);
          console.log(this.eviActual);
          window.open(this.eviActual);
        }
      );
  }

}
