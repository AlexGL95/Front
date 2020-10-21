import { Component, OnInit } from '@angular/core';
import { EvidenciaService } from 'src/app/services/evidencia.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-evidencia-r',
  templateUrl: './evidencia-r.component.html',
  styleUrls: ['./evidencia-r.component.css']
})
export class EvidenciaRComponent implements OnInit {

  eviActual;

  constructor(private evidenciaService: EvidenciaService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {

    let evi = this.route.snapshot.paramMap.get('folio');
    this.evidenciaService.verEvidenciaRC( evi )
      .subscribe(
        data => {
          const file = new Blob([data]);
          console.log(data, file);
          this.eviActual = URL.createObjectURL(file);
          console.log(this.eviActual);
          window.open(this.eviActual);
        }
      );
  }

}
