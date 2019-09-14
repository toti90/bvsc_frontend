import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-stepper-head',
  templateUrl: './stepper-head.component.html',
  styleUrls: ['./stepper-head.component.scss']
})
export class StepperHeadComponent implements OnInit {

  @Input() stepNumber: number;
  @Input() beforeStepString: string;
  @Input() afterStepString: string;
  @Input() selectedValue: any;

  constructor() { }

  ngOnInit() {
    if (this.selectedValue && this.selectedValue.indexOf('null') > -1) {
      this.selectedValue = null;
    }
  }

}
