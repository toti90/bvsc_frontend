import { Component, OnInit } from '@angular/core';

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
  private selectedHour: Date;
  private selectedHall: string;


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



  findDay(timestamp: number) {
    const time = new Date(timestamp);
    const day = time.getDate();
    const month = time.getMonth();
    const year = time.getFullYear();
    this.selectedDay = new Date(`${month + 1}-${day}-${year}`);
  }

  addStartHour(hour: number) {
    this.selectedHour = new Date((this.selectedDay.getTime() + (hour) * 3600000));
  }

  selectHall(hall: string) {
    this.selectedHall = hall;
  }
}
