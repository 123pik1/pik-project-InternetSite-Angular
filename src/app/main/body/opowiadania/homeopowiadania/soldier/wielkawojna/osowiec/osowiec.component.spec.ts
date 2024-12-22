import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OsowiecComponent } from './osowiec.component';

describe('OsowiecComponent', () => {
  let component: OsowiecComponent;
  let fixture: ComponentFixture<OsowiecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OsowiecComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OsowiecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
