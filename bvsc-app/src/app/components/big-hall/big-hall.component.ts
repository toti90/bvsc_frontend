import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-big-hall',
  templateUrl: './big-hall.component.html',
  styleUrls: ['./big-hall.component.scss']
})
export class BigHallComponent implements OnInit {

  public tables = [9,8,7,6,5,4,3,2,1];
  @Input() selectedHour;
  @Input() selectedHall;

  constructor() { }

  ngOnInit() {
  }

  selectTable(tableNumber: number) {
    console.log(tableNumber);
    console.log(this.selectedHour);
    console.log(this.selectedHall);
  }

}
