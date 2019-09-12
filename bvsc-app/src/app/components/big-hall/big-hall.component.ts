import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-big-hall',
  templateUrl: './big-hall.component.html',
  styleUrls: ['./big-hall.component.scss']
})
export class BigHallComponent implements OnInit {

  private tables = [9, 8, 7, 6, 5, 4, 3, 2, 1];
  @Input() selectedHour;
  @Input() selectedHall;
  @Input() bookedTablesHall;
  @Output() selectedTable = new EventEmitter<number[]>();
  private selectedTableClass: number[] = [];

  constructor() { }

  ngOnInit() {
  }

  selectTable(tableNumber: number) {
    if (!this.selectedTableClass.includes(tableNumber) && !this.bookedTablesHall.includes(tableNumber)) {
      this.selectedTableClass.push(tableNumber);
      this.selectedTable.emit(this.selectedTableClass);
    } else if (this.selectedTableClass.includes(tableNumber) && !this.bookedTablesHall.includes(tableNumber)) {
      this.selectedTableClass = this.selectedTableClass.filter(table => table !== tableNumber);
      this.selectedTable.emit(this.selectedTableClass);
    }
    
  }

  deleteTable() {
    this.selectedTableClass = null;
    this.selectedTable.emit(null);
  }

}
