import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrowComponent } from './carrow.component';

describe('CarrowComponent', () => {
  let component: CarrowComponent;
  let fixture: ComponentFixture<CarrowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarrowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
