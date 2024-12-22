import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersjaComponent } from './persja.component';

describe('PersjaComponent', () => {
  let component: PersjaComponent;
  let fixture: ComponentFixture<PersjaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersjaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersjaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
