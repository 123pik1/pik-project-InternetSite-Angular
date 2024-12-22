import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PowiesciComponent } from './powiesci.component';

describe('PowiesciComponent', () => {
  let component: PowiesciComponent;
  let fixture: ComponentFixture<PowiesciComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PowiesciComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PowiesciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
