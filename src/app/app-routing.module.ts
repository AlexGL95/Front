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
import { SuccessComponent } from './components/success/success.component';
import { GraficaComponent } from './components/grafica/grafica.component';

const routes: Routes = [
  { path: 'Inicio', component: InicioComponent, data: { title: 'PiiñaTeEscucha' } },
  { path: 'Login', component: LoginComponent, data: { title: 'Login' }  },
  { path: 'Navbar', component: NavbarComponent },
  { path: 'Propuesta/:id/:area', component: PropuestaComponent, data: { title: 'Propuesta' }  },
  { path: 'PropuestaAdmi', component: PropuestaAdmiComponent, data: { title: 'Propuesta Administrador' }  },
  { path: 'PropuestaCard', component: PropuestaCardComponent, data: { title: 'Propuesta Selector' }  },
  { path: 'PropuestaLista/:categoria', component: PropuestaListaComponent, data: { title: 'Propuesta Lista' }  },
  { path: 'Queja/:id/:area', component: QuejaComponent, data: { title: 'Queja' }  },
  { path: 'QuejaAdmi', component: QuejaAdmiComponent, data: { title: 'Queja Administrador' }  },
  { path: 'QuejaCard', component: QuejaCardComponent, data: { title: 'Queja Selector' }  },
  { path: 'QuejaLista/:categoria', component: QuejaListaComponent, data: { title: 'Queja Lista' }  },
  { path: 'ReporteCi/:id/:area', component: ReporteCiudadanoComponent, data: { title: 'Reporte Ciudadano' }  },
  { path: 'ReporteCiAdmi', component: ReporteCiudadanoAdmiComponent, data: { title: 'Reporte Ciudadano Administrador' }  },
  { path: 'ReporteCiCard', component: ReporteCiudadanoCardComponent, data: { title: 'Reporte Ciudadano Selector' }  },
  { path: 'ReporteCiLista/:categoria', component: ReporteCiudadanoListaComponent, data: { title: 'Reporte Ciudadano Lista' }  },
  { path: 'Grafica', component: GraficaComponent, data: { title: 'Reportes' }  },
  { path: 'Success/:folio', component: SuccessComponent, data: { title: 'Exito' }  },
  { path: '**', component:  InicioComponent, data: { title: 'PiiñaTeEscucha' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
