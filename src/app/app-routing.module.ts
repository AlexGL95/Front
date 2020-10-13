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

const routes: Routes = [
  { path: 'Inicio', component: InicioComponent, data: { title: 'PiiñaTeEscucha' } },
  { path: 'Login', component: LoginComponent, data: { title: 'Login' }  },
  { path: 'Navbar', component: NavbarComponent },
  { path: 'Propuesta', component: PropuestaComponent, data: { title: 'Propuesta' }  },
  { path: 'PropuestaAdmi', component: PropuestaAdmiComponent, data: { title: 'Propuesta Administrador' }  },
  { path: 'PropuestaCard', component: PropuestaCardComponent, data: { title: 'Propuesta Selector' }  },
  { path: 'PropuestaLista', component: PropuestaListaComponent, data: { title: 'Propuesta Lista' }  },
  { path: 'Queja', component: QuejaComponent, data: { title: 'Queja' }  },
  { path: 'QuejaAdmi', component: QuejaAdmiComponent, data: { title: 'Queja Administrador' }  },
  { path: 'QuejaCard', component: QuejaCardComponent, data: { title: 'Queja Selector' }  },
  { path: 'QuejaLista', component: QuejaListaComponent, data: { title: 'Queja Lista' }  },
  { path: 'ReporteCi', component: ReporteCiudadanoComponent, data: { title: 'Reporte Ciudadano' }  },
  { path: 'ReporteCiAdmi', component: ReporteCiudadanoAdmiComponent, data: { title: 'Reporte Ciudadano Administrador' }  },
  { path: 'ReporteCiCard', component: ReporteCiudadanoCardComponent, data: { title: 'Reporte Ciudadano Selector' }  },
  { path: 'ReporteCiLista', component: ReporteCiudadanoListaComponent, data: { title: 'Reporte Ciudadano Lista' }  },
  { path: '**', component:  InicioComponent, data: { title: 'PiiñaTeEscucha' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }