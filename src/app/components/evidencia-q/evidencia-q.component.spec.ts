import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvidenciaQComponent } from './evidencia-q.component';

describe('EvidenciaQComponent', () => {
  let component: EvidenciaQComponent;
  let fixture: ComponentFixture<EvidenciaQComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvidenciaQComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EvidenciaQComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
