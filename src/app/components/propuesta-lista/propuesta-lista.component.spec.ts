import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropuestaListaComponent } from './propuesta-lista.component';

describe('PropuestaListaComponent', () => {
  let component: PropuestaListaComponent;
  let fixture: ComponentFixture<PropuestaListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropuestaListaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PropuestaListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
