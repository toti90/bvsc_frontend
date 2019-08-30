import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BigHallComponent } from './big-hall.component';

describe('BigHallComponent', () => {
  let component: BigHallComponent;
  let fixture: ComponentFixture<BigHallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BigHallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BigHallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
