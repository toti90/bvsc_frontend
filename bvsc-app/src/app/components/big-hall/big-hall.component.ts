import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-big-hall',
  templateUrl: './big-hall.component.html',
  styleUrls: ['./big-hall.component.scss']
})
export class BigHallComponent implements OnInit {

  public tables = [9,8,7,6,5,4,3,2,1];
  @Input() selectedHour;
  @Input() selectedHall;
  @Output() selectedTable = new EventEmitter<number>();
  private selectedTableClass: number;

  constructor() { }

  ngOnInit() {
  }

  selectTable(tableNumber: number) {
    this.selectedTableClass = tableNumber;
    this.selectedTable.emit(tableNumber);
  }

}
