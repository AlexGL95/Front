import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropuestaCardComponent } from './propuesta-card.component';

describe('PropuestaCardComponent', () => {
  let component: PropuestaCardComponent;
  let fixture: ComponentFixture<PropuestaCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropuestaCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PropuestaCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
