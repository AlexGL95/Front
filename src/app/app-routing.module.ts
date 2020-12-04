import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PropuestaComponent } from './components/propuesta/propuesta.component';
import { PropuestaAdmiComponent } from './components/propuesta-admi/propuesta-admi.component';
import { PropuestaCardComponent } from './components/propuesta-card/propuesta-card.component';
import { PropuestaListaComponent } from './components/propuesta-lista/propuesta-lista.component';
import { QuejaComponent } from './components/queja/queja.component';
import { QuejaAdmiComponent } from './components/queja-admi/queja-admi.component';
import { QuejaCardComponent } from './components/queja-card/queja-card.component';
import { QuejaListaComponent } from './components/queja-lista/queja-lista.component';
import { ReporteCiudadanoComponent } from './components/reporte-ciudadano/reporte-ciudadano.component';
import { ReporteCiudadanoAdmiComponent } from './components/reporte-ciudadano-admi/reporte-ciudadano-admi.component';
import { ReporteCiudadanoCardComponent } from './components/reporte-ciudadano-card/reporte-ciudadano-card.component';
import { ReporteCiudadanoListaComponent } from './components/reporte-ciudadano-lista/reporte-ciudadano-lista.component';
import { AuthGuard } from './auth.guard';
import { LogGuard } from './log.guard';
import { SuccessComponent } from './components/success/success.component';
import { GraficaComponent } from './components/grafica/grafica.component';

const routes: Routes = [
  { path: 'navbar', loadChildren: () => import( './components/navbar/navbar.module' ).then( m => m.NavbarModule ), canActivate: [AuthGuard] },
  { path: 'Inicio', component: InicioComponent, data: { title: 'PiiñaTeEscucha' } },
  { path: 'Login', component: LoginComponent, data: { title: 'Login' }, canActivate: [LogGuard] },
  { path: 'ReporteCiCard', component: ReporteCiudadanoCardComponent, data: { title: 'Reporte Ciudadano Selector' } },
  { path: 'PropuestaCard', component: PropuestaCardComponent, data: { title: 'Propuesta Selector' } },
  { path: 'QuejaCard', component: QuejaCardComponent, data: { title: 'Queja Selector' } },
  { path: 'Queja/:id/:id2/:area', component: QuejaComponent, data: { title: 'Queja' } },
  { path: 'ReporteCi/:id/:id2/:area', component: ReporteCiudadanoComponent, data: { title: 'Reporte Ciudadano' } },
  { path: 'Propuesta/:id/:id2/:area', component: PropuestaComponent, data: { title: 'Propuesta' } },

  { path: 'Reporte/ver/:folio', component: EvidenciaRComponent, data: { title: 'Evidencia' }, canActivate: [AuthGuard] },
  { path: 'Propuesta/ver/:folio', component: EvidenciaPComponent, data: { title: 'Evidencia' }, canActivate: [AuthGuard] },
  { path: 'Queja/ver/:folio', component: EvidenciaQComponent, data: { title: 'Evidencia' }, canActivate: [AuthGuard] },
  { path: '**', component: InicioComponent, data: { title: 'PiiñaTeEscucha' } }
];

@NgModule( {
  imports: [RouterModule.forRoot( routes )],
  exports: [RouterModule]
} )
export class AppRoutingModule { }
import { EvidenciaPComponent } from './components/evidencia-p/evidencia-p.component';
import { EvidenciaQComponent } from './components/evidencia-q/evidencia-q.component'; import { EvidenciaRComponent } from './components/evidencia-r/evidencia-r.component';
import { NavbarModule } from './components/navbar/navbar.module';

