import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvidenciaPComponent } from './evidencia-p.component';

describe('EvidenciaPComponent', () => {
  let component: EvidenciaPComponent;
  let fixture: ComponentFixture<EvidenciaPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvidenciaPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EvidenciaPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
