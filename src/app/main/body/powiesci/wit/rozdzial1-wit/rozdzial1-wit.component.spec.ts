import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Rozdzial1WitComponent } from './rozdzial1-wit.component';

describe('Rozdzial1WitComponent', () => {
  let component: Rozdzial1WitComponent;
  let fixture: ComponentFixture<Rozdzial1WitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Rozdzial1WitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Rozdzial1WitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
