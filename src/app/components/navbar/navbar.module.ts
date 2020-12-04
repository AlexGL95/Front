import { NgModule } from "@angular/core";
import { ReporteCiudadanoAdmiComponent } from '../reporte-ciudadano-admi/reporte-ciudadano-admi.component';
import { QuejaAdmiComponent } from '../queja-admi/queja-admi.component';
import { PropuestaAdmiComponent } from '../propuesta-admi/propuesta-admi.component';
import { ReporteCiudadanoListaComponent } from '../reporte-ciudadano-lista/reporte-ciudadano-lista.component';
import { GraficaComponent } from '../grafica/grafica.component';
import { SuccessComponent } from '../success/success.component';
import { PropuestaListaComponent } from '../propuesta-lista/propuesta-lista.component';
import { QuejaListaComponent } from '../queja-lista/queja-lista.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GoogleChartsModule } from 'angular-google-charts';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { NavbarComponent } from './navbar.component';
import { NavbarRoutingModule } from './navbar-routing.module';
import { PdfViewComponent } from '../pdf-view/pdf-view.component';

@NgModule( {
    declarations: [
        ReporteCiudadanoAdmiComponent,
        QuejaAdmiComponent,
        PropuestaAdmiComponent,
        ReporteCiudadanoListaComponent,
        GraficaComponent,
        SuccessComponent,
        PropuestaListaComponent,
        QuejaListaComponent,
        PdfViewComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        AppRoutingModule,
        FontAwesomeModule,
        HttpClientModule,
        NgbModule,
        PdfViewerModule,
        GoogleChartsModule,
        BrowserAnimationsModule, // required animations module
        ToastrModule.forRoot( {
            timeOut: 10000,
            positionClass: 'toast-bottom-right',
            preventDuplicates: true,
        } ), // ToastrModule added
    ]
} )
export class NavbarModule { }
