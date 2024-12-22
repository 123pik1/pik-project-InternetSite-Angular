import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegionistaComponent } from './legionista.component';

describe('LegionistaComponent', () => {
  let component: LegionistaComponent;
  let fixture: ComponentFixture<LegionistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LegionistaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LegionistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
