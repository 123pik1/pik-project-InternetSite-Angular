import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Wojnaswiatowa2Component } from './wojnaswiatowa2.component';

describe('Wojnaswiatowa2Component', () => {
  let component: Wojnaswiatowa2Component;
  let fixture: ComponentFixture<Wojnaswiatowa2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Wojnaswiatowa2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Wojnaswiatowa2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
