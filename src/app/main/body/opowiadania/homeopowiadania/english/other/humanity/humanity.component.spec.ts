import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HumanityComponent } from './humanity.component';

describe('HumanityComponent', () => {
  let component: HumanityComponent;
  let fixture: ComponentFixture<HumanityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HumanityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HumanityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
