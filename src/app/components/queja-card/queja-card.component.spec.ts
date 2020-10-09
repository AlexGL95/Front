import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuejaCardComponent } from './queja-card.component';

describe('QuejaCardComponent', () => {
  let component: QuejaCardComponent;
  let fixture: ComponentFixture<QuejaCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuejaCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuejaCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
