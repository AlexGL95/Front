import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteCiudadanoCardComponent } from './reporte-ciudadano-card.component';

describe('ReporteCiudadanoCardComponent', () => {
  let component: ReporteCiudadanoCardComponent;
  let fixture: ComponentFixture<ReporteCiudadanoCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReporteCiudadanoCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporteCiudadanoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
