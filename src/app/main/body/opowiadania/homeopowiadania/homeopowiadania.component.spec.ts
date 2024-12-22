import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeopowiadaniaComponent } from './homeopowiadania.component';

describe('HomeopowiadaniaComponent', () => {
  let component: HomeopowiadaniaComponent;
  let fixture: ComponentFixture<HomeopowiadaniaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeopowiadaniaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeopowiadaniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
