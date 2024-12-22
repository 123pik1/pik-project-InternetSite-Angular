import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpowiadaniaComponent } from './opowiadania.component';

describe('OpowiadaniaComponent', () => {
  let component: OpowiadaniaComponent;
  let fixture: ComponentFixture<OpowiadaniaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpowiadaniaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpowiadaniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
