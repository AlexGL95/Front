// tslint:disable: max-line-length
import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { GraficaComponent } from '../grafica/grafica.component';
import { PropuestaAdmiComponent } from '../propuesta-admi/propuesta-admi.component';
import { PropuestaListaComponent } from '../propuesta-lista/propuesta-lista.component';
import { QuejaAdmiComponent } from '../queja-admi/queja-admi.component';
import { QuejaListaComponent } from '../queja-lista/queja-lista.component';
import { ReporteCiudadanoAdmiComponent } from '../reporte-ciudadano-admi/reporte-ciudadano-admi.component';
import { ReporteCiudadanoListaComponent } from '../reporte-ciudadano-lista/reporte-ciudadano-lista.component';
import { SuccessComponent } from '../success/success.component';
import { NavbarComponent } from './navbar.component';

const routes: Routes = [
    {
        path: '', component: NavbarComponent, children: [
            { path: '', redirectTo: 'ReporteCiAdmi', pathMatch: 'full' },
            { path: 'ReporteCiAdmi', component: ReporteCiudadanoAdmiComponent, data: { title: 'Reporte Ciudadano Administrador' } },
            { path: 'QuejaAdmi', component: QuejaAdmiComponent, data: { title: 'Queja Administrador' } },
            { path: 'PropuestaAdmi', component: PropuestaAdmiComponent, data: { title: 'Propuesta Administrador' } },
            { path: 'ReporteCiLista/:categoria', component: ReporteCiudadanoListaComponent, data: { title: 'Reporte Ciudadano Lista' } },
            { path: 'Grafica', component: GraficaComponent, data: { title: 'Reportes' } },
            { path: 'Success/:folio', component: SuccessComponent, data: { title: 'Exito' } },
            { path: 'PropuestaLista/:categoria', component: PropuestaListaComponent, data: { title: 'Propuesta Lista' } },
            { path: 'QuejaLista/:categoria', component: QuejaListaComponent, data: { title: 'Queja Lista' } },
        ]
    }


];

@NgModule( {
    imports: [RouterModule.forChild( routes )],
    exports: [RouterModule]
} )
export class NavbarRoutingModule { }
