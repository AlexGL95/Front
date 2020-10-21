import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvidenciaRComponent } from './evidencia-r.component';

describe('EvidenciaRComponent', () => {
  let component: EvidenciaRComponent;
  let fixture: ComponentFixture<EvidenciaRComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvidenciaRComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EvidenciaRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
