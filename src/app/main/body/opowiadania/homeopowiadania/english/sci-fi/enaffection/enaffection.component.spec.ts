import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnaffectionComponent } from './enaffection.component';

describe('EnaffectionComponent', () => {
  let component: EnaffectionComponent;
  let fixture: ComponentFixture<EnaffectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnaffectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnaffectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
