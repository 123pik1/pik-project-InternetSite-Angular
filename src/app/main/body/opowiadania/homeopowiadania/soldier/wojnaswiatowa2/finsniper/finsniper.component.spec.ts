import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinsniperComponent } from './finsniper.component';

describe('FinsniperComponent', () => {
  let component: FinsniperComponent;
  let fixture: ComponentFixture<FinsniperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinsniperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinsniperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
