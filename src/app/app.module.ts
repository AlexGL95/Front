import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { QuejaCardComponent } from './components/queja-card/queja-card.component';
import { PropuestaCardComponent } from './components/propuesta-card/propuesta-card.component';
import { ReporteCiudadanoCardComponent } from './components/reporte-ciudadano-card/reporte-ciudadano-card.component';
import { QuejaComponent } from './components/queja/queja.component';
import { PropuestaComponent } from './components/propuesta/propuesta.component';
import { ReporteCiudadanoComponent } from './components/reporte-ciudadano/reporte-ciudadano.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { QuejaAdmiComponent } from './components/queja-admi/queja-admi.component';
import { PropuestaAdmiComponent } from './components/propuesta-admi/propuesta-admi.component';
import { ReporteCiudadanoAdmiComponent } from './components/reporte-ciudadano-admi/reporte-ciudadano-admi.component';
import { QuejaListaComponent } from './components/queja-lista/queja-lista.component';
import { PropuestaListaComponent } from './components/propuesta-lista/propuesta-lista.component';
import { ReporteCiudadanoListaComponent } from './components/reporte-ciudadano-lista/reporte-ciudadano-lista.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { PdfViewComponent } from './components/pdf-view/pdf-view.component';
import { EvidenciaPComponent } from './components/evidencia-p/evidencia-p.component';
import { SuccessComponent } from './components/success/success.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    QuejaCardComponent,
    PropuestaCardComponent,
    ReporteCiudadanoCardComponent,
    QuejaComponent,
    PropuestaComponent,
    ReporteCiudadanoComponent,
    LoginComponent,
    NavbarComponent,
    QuejaAdmiComponent,
    PropuestaAdmiComponent,
    ReporteCiudadanoAdmiComponent,
    QuejaListaComponent,
    PropuestaListaComponent,
    ReporteCiudadanoListaComponent,
    PdfViewComponent,
    SuccessComponent,
    EvidenciaPComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    NgbModule,
    PdfViewerModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
