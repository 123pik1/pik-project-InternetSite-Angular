import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChessclubComponent } from './chessclub.component';

describe('ChessclubComponent', () => {
  let component: ChessclubComponent;
  let fixture: ComponentFixture<ChessclubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChessclubComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChessclubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
