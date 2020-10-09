import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteCiudadanoComponent } from './reporte-ciudadano.component';

describe('ReporteCiudadanoComponent', () => {
  let component: ReporteCiudadanoComponent;
  let fixture: ComponentFixture<ReporteCiudadanoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReporteCiudadanoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporteCiudadanoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
