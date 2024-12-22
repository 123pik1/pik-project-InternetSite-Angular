import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarozytnoscComponent } from './starozytnosc.component';

describe('StarozytnoscComponent', () => {
  let component: StarozytnoscComponent;
  let fixture: ComponentFixture<StarozytnoscComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarozytnoscComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StarozytnoscComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
