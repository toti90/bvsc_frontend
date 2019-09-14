import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperHeadComponent } from './stepper-head.component';

describe('StepperHeadComponent', () => {
  let component: StepperHeadComponent;
  let fixture: ComponentFixture<StepperHeadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepperHeadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepperHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
