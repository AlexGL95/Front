import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pdf-view',
  template: `
  <pdf-viewer [src]="pdfSrc" 
              [render-text]="true"
              style="display: block;"
  ></pdf-viewer>
  `
})
export class PdfViewComponent {
  @Input() pdfSrc: string;
}
