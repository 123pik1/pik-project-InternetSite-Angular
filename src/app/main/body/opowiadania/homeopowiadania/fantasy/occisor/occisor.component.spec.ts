import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OccisorComponent } from './occisor.component';

describe('OccisorComponent', () => {
  let component: OccisorComponent;
  let fixture: ComponentFixture<OccisorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OccisorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OccisorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
