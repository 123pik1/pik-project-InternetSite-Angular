import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NowozytnoscComponent } from './nowozytnosc.component';

describe('NowozytnoscComponent', () => {
  let component: NowozytnoscComponent;
  let fixture: ComponentFixture<NowozytnoscComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NowozytnoscComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NowozytnoscComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
