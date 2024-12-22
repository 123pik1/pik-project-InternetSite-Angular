import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Rozdzial3WitComponent } from './rozdzial3-wit.component';

describe('Rozdzial3WitComponent', () => {
  let component: Rozdzial3WitComponent;
  let fixture: ComponentFixture<Rozdzial3WitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Rozdzial3WitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Rozdzial3WitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
