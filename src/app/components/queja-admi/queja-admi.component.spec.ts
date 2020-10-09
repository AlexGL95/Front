import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuejaAdmiComponent } from './queja-admi.component';

describe('QuejaAdmiComponent', () => {
  let component: QuejaAdmiComponent;
  let fixture: ComponentFixture<QuejaAdmiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuejaAdmiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuejaAdmiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
