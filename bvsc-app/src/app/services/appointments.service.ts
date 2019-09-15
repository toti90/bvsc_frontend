import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppointmentsService {

  constructor(private http: HttpClient) { }

  getAppointmentForSelectedDay(day: Date) {
    return this.http.get(`${environment.serverURL}/date/${day}`, {
      headers: { 'content-type': 'application/json' },
    })
  }

  getAppointmentForSelectedHour(time: Date) {
    return this.http.get(`${environment.serverURL}/starttime/${time}`, {
      headers: { 'content-type': 'application/json' },
    })
  }

  postAppointment(obj) {
    return this.http.post(`${environment.serverURL}/appointments`, obj, {
      headers: { 'content-type': 'application/json' }
    })
  }
}
