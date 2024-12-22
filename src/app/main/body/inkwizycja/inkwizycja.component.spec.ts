import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InkwizycjaComponent } from './inkwizycja.component';

describe('InkwizycjaComponent', () => {
  let component: InkwizycjaComponent;
  let fixture: ComponentFixture<InkwizycjaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InkwizycjaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InkwizycjaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
