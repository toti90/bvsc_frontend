import { Component, OnInit } from '@angular/core';
import { AppointmentsService } from 'src/app/services/appointments.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { MatSnackBar } from '@angular/material';
import { SnackBarComponent } from '../snack-bar/snack-bar.component';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.scss']
})
export class AppointmentsComponent implements OnInit {

  faTrashAlt = faTrashAlt;

  private userId: string;
  private appointments: any;

  constructor(private appointmentsService: AppointmentsService, private authenticationService: AuthenticationService,
    private _snackBar: MatSnackBar) { }

  ngOnInit() {
    this.userId = this.authenticationService.getUserIdLocal();
    this.appointmentsService.getAppointmentsForUser(this.userId).subscribe(response => {
      this.appointments = response;
      this.appointments.forEach(app => {
        app.fromConverted = `${app.from.split('T')[1].split(':')[0]}:00 - ${app.to.split('T')[1].split(':')[0]}:00`;
        app.table.sort((a,b) => a-b);
      })

    }, err => console.log(err));
  }

  allTableDelete(appointment) {
    this.appointmentsService.deleteAppointment(appointment._id).subscribe(response => {
      this.appointments = this.appointments.filter(app => app._id !== appointment._id);
      this.openSnackBar()
    }, err => console.log(err));
  }

  oneTableDelete(appointment, table) {
    if (appointment.table.length === 1) {
      this.allTableDelete(appointment);
    } else {
      this.appointmentsService.deleteAppointment(appointment._id, table).subscribe(response => {
        this.appointments.forEach(app => {
          if (app._id === appointment._id) {
            app.table = app.table.filter(tab => tab != table) 
          }
        });
        this.openSnackBar()
      }, err => console.log(err));
    }
  }

  openSnackBar() {
    this._snackBar.open('Sikeres lemondás', 'OK', {
      duration: 2000,
    });
  }

}
