import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FalangitaComponent } from './falangita.component';

describe('FalangitaComponent', () => {
  let component: FalangitaComponent;
  let fixture: ComponentFixture<FalangitaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FalangitaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FalangitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
