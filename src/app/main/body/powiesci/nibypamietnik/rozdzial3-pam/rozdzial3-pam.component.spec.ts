import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Rozdzial3PamComponent } from './rozdzial3-pam.component';

describe('Rozdzial3PamComponent', () => {
  let component: Rozdzial3PamComponent;
  let fixture: ComponentFixture<Rozdzial3PamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Rozdzial3PamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Rozdzial3PamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
