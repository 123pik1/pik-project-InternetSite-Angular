import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NibypamietnikComponent } from './nibypamietnik.component';

describe('NibypamietnikComponent', () => {
  let component: NibypamietnikComponent;
  let fixture: ComponentFixture<NibypamietnikComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NibypamietnikComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NibypamietnikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
