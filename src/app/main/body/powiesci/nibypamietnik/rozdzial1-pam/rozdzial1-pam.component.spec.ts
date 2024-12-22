import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Rozdzial1PamComponent } from './rozdzial1-pam.component';

describe('Rozdzial1PamComponent', () => {
  let component: Rozdzial1PamComponent;
  let fixture: ComponentFixture<Rozdzial1PamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Rozdzial1PamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Rozdzial1PamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
