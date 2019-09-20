import { Component, OnInit, Input, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { MatDatepickerInputEvent, MatDialog, MatSnackBar } from '@angular/material';
import { AppointmentsService } from 'src/app/services/appointments.service';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { PopupConfirmationComponent } from '../popup-confirmation/popup-confirmation.component';
import { SnackBarComponent } from '../snack-bar/snack-bar.component';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-days',
  templateUrl: './days.component.html',
  styleUrls: ['./days.component.scss']
})
export class DaysComponent implements OnInit {

  faCalendar = faCalendarAlt;

  public nextFiveDays = [];
  public favouritehours = [18, 19, 20];
  public hours = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21];
  public halls = ['Nagy Terem', 'Kis Terem'];
  private selectedDay: Date;
  private selectedDayClass: string;
  private selectedHour: Date;
  private selectedHourClass: number;
  private selectedHall: string;
  private selectedTable: number[];

  private minDate = new Date();
  private maxDate = new Date(new Date().getTime() + (24 * 60 * 60 * 1000 * 14));
  @ViewChild('dateInput', { static: true }) dateInput: ElementRef;

  private fullHours = [];
  private fullHall = [];
  private bookedTablesSmallHall = [];
  private bookedTablesBigHall = [];

  private calendarToggle = false

  durationInSeconds = 5;

  constructor(private appointmentsService: AppointmentsService, public dialog: MatDialog, 
    private _snackBar: MatSnackBar, private authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.generateNextFiveDays();
  }

  openSnackBar() {
    this._snackBar.openFromComponent(SnackBarComponent, {
      duration: this.durationInSeconds * 1000,
    });
  }

  generateNextFiveDays() {
    for (let i = 0; i < 5; i++) {
      const day = new Date();
      this.nextFiveDays.push(day.getTime() + (24 * 60 * 60 * 1000 * i));
    }
  }

  selectTable(tableNumber) {
    this.selectedTable = tableNumber;
    if (this.selectedTable.length === 0) {
      this.selectedTable = null
    }
  }

  findDay(timestamp, datepicker: boolean) {
    this.selectedHour = null;
    this.selectedHourClass = null;
    this.selectedHall = null;
    this.selectedTable = null;
    this.fullHours = [];
    this.selectedDayClass = timestamp;
    const time = new Date(timestamp);
    const day = time.getDate();
    const month = time.getMonth();
    const year = time.getFullYear();
    this.selectedDay = new Date(`${month + 1}-${day}-${year}`);
    this.appointmentsService.getAppointmentForSelectedDay(this.selectedDay).subscribe(response => {
      response['appointment'].forEach(hour => {
        if (hour['numberOfTablesBooked'] === 18) { this.fullHours.push(new Date(hour.time).getUTCHours()); }
      });
    })
  }

  addStartHour(hour: number) {
    this.selectedHall = null;
    this.selectedTable = null;
    this.selectedHourClass = hour;
    this.fullHall = [];
    this.bookedTablesBigHall = [];
    this.bookedTablesSmallHall = [];
    this.selectedHour = new Date(this.selectedDay);
    this.selectedHour.setHours(this.selectedDay.getHours() + hour - (this.selectedDay.getTimezoneOffset() / 60));
    this.appointmentsService.getAppointmentForSelectedHour(this.selectedHour).subscribe(response => {
      response['appointment'].forEach(hall => {
        if (hall['isBigHall'] === true) {
          this.bookedTablesBigHall = hall['tables'];
          if (hall['numberOfBookedTables'] === 9) {
            this.fullHall.push('Nagy Terem');
          }
        } else {
          this.bookedTablesSmallHall = hall['tables'];
          if (hall['numberOfBookedTables'] === 9) {
            this.fullHall.push('Kis Terem');
          }
        }
      })
    })
  }

  selectHall(hall: string) {
    this.selectedHall = hall;
    this.selectedTable = null;
  }


  addEvent(event) {
    this.selectedDayClass = null;
    this.findDay(event.getTime(), true);
    this.calendarToggle = false;
  }

  confirmBooking() {
    let finishTime = new Date(this.selectedHour);
    finishTime.setHours(this.selectedHour.getHours() + 1);
    const isBigHall = this.selectedHall === 'Nagy Terem' ? true : false;
    const userId = this.authenticationService.getUserIdLocal();
    const userEmail = this.authenticationService.getUserEmailLocal();
    const appointment = {
      from: this.selectedHour,
      to: finishTime,
      bigHall: isBigHall,
      table: this.selectedTable,
      user: userId,
      email: userEmail
    }
    this.appointmentsService.postAppointment(appointment);
  }

  openToggle() {
    this.calendarToggle = !this.calendarToggle;
  }

  openDialog() {
    let finishTime = new Date(this.selectedHour);
    finishTime.setHours(this.selectedHour.getUTCHours());
    const dialogRef = this.dialog.open(PopupConfirmationComponent, {
      width: '300px',
      data: {name: 'toti90', selectedHour: finishTime, tables: this.selectedTable.sort((a,b)=> a-b)}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'ok') {
        this.confirmBooking();
        this.openSnackBar();
        this.selectedHall = null;
        this.selectedTable = null;
        this.selectedHourClass = null;
        this.fullHall = [];
        this.fullHours = [];
        this.bookedTablesBigHall = [];
        this.bookedTablesSmallHall = [];
        this.selectedDay = null;
        this.selectedDayClass = null;
      }
    });
  }
}
