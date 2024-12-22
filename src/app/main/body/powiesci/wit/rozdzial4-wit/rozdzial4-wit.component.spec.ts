import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Rozdzial4WitComponent } from './rozdzial4-wit.component';

describe('Rozdzial4WitComponent', () => {
  let component: Rozdzial4WitComponent;
  let fixture: ComponentFixture<Rozdzial4WitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Rozdzial4WitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Rozdzial4WitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
