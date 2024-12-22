import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Rozdzial2PamComponent } from './rozdzial2-pam.component';

describe('Rozdzial2PamComponent', () => {
  let component: Rozdzial2PamComponent;
  let fixture: ComponentFixture<Rozdzial2PamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Rozdzial2PamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Rozdzial2PamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
