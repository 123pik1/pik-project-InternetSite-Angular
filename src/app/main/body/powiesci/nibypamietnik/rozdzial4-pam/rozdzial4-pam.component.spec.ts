import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Rozdzial4PamComponent } from './rozdzial4-pam.component';

describe('Rozdzial4PamComponent', () => {
  let component: Rozdzial4PamComponent;
  let fixture: ComponentFixture<Rozdzial4PamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Rozdzial4PamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Rozdzial4PamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
