import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropuestaAdmiComponent } from './propuesta-admi.component';

describe('PropuestaAdmiComponent', () => {
  let component: PropuestaAdmiComponent;
  let fixture: ComponentFixture<PropuestaAdmiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropuestaAdmiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PropuestaAdmiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
