import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteCiudadanoListaComponent } from './reporte-ciudadano-lista.component';

describe('ReporteCiudadanoListaComponent', () => {
  let component: ReporteCiudadanoListaComponent;
  let fixture: ComponentFixture<ReporteCiudadanoListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReporteCiudadanoListaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporteCiudadanoListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
