import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuejaListaComponent } from './queja-lista.component';

describe('QuejaListaComponent', () => {
  let component: QuejaListaComponent;
  let fixture: ComponentFixture<QuejaListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuejaListaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuejaListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
