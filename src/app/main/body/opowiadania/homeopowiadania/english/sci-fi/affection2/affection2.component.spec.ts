import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Affection2Component } from './affection2.component';

describe('Affection2Component', () => {
  let component: Affection2Component;
  let fixture: ComponentFixture<Affection2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Affection2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Affection2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
