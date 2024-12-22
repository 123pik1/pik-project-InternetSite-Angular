import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HusarzComponent } from './husarz.component';

describe('HusarzComponent', () => {
  let component: HusarzComponent;
  let fixture: ComponentFixture<HusarzComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HusarzComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HusarzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
