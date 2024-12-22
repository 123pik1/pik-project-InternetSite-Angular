import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WielkawojnaComponent } from './wielkawojna.component';

describe('WielkawojnaComponent', () => {
  let component: WielkawojnaComponent;
  let fixture: ComponentFixture<WielkawojnaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WielkawojnaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WielkawojnaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
