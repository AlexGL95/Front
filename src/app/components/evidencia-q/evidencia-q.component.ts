import { Component, OnInit } from '@angular/core';
import { EvidenciaService } from 'src/app/services/evidencia.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-evidencia-q',
  templateUrl: './evidencia-q.component.html',
  styleUrls: ['./evidencia-q.component.css']
})
export class EvidenciaQComponent implements OnInit {

  eviActual;

  constructor(private evidenciaService: EvidenciaService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {

    let evi = this.route.snapshot.paramMap.get('folio');
    this.evidenciaService.verEvidenciaQ( evi )
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
