import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-days',
  templateUrl: './days.component.html',
  styleUrls: ['./days.component.scss']
})
export class DaysComponent implements OnInit {

  public nextFiveDays = [];
  public hours = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21];
  public halls = ['Nagy Terem', 'Kis Terem'];
  private selectedDay: Date;
  private selectedDayClass: string;
  private selectedHour: Date;
  private selectedHourClass: number;
  private selectedHall: string;
  private selectedTable: number;


  constructor() { }

  ngOnInit() {
    this.generateNextFiveDays();
  }

  generateNextFiveDays() {
    for (let i = 0; i < 5; i++) {
      const day = new Date();
      this.nextFiveDays.push(day.getTime() + (24 * 60 * 60 * 1000 * i));
    }
  }

  selectTable(tableNumber) {
    this.selectedTable = tableNumber;
  }

  findDay(timestamp) {
    this.selectedDayClass = timestamp;
    const time = new Date(timestamp);
    const day = time.getDate();
    const month = time.getMonth();
    const year = time.getFullYear();
    this.selectedDay = new Date(`${month + 1}-${day}-${year}`);
    //Call service to call backend api with selectedDay

    //Get response where you see the selected day's hours with label full: true or false;
  }

  addStartHour(hour: number) {
    this.selectedHourClass = hour;
    this.selectedHour = new Date((this.selectedDay.getTime() + (hour) * 3600000));
  }

  selectHall(hall: string) {
    this.selectedHall = hall;
  }
}
