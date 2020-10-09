import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteCiudadanoAdmiComponent } from './reporte-ciudadano-admi.component';

describe('ReporteCiudadanoAdmiComponent', () => {
  let component: ReporteCiudadanoAdmiComponent;
  let fixture: ComponentFixture<ReporteCiudadanoAdmiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReporteCiudadanoAdmiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporteCiudadanoAdmiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
