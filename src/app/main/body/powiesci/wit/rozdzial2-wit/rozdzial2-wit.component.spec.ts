import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Rozdzial2WitComponent } from './rozdzial2-wit.component';

describe('Rozdzial2WitComponent', () => {
  let component: Rozdzial2WitComponent;
  let fixture: ComponentFixture<Rozdzial2WitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Rozdzial2WitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Rozdzial2WitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
