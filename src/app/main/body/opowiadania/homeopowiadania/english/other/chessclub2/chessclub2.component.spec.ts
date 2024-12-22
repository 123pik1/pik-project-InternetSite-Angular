import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chessclub2Component } from './chessclub2.component';

describe('Chessclub2Component', () => {
  let component: Chessclub2Component;
  let fixture: ComponentFixture<Chessclub2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Chessclub2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Chessclub2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
