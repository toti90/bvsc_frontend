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
    }).subscribe(response => {}, err => console.log(err));
  }

  getAppointmentsForUser(userId: string) {
    return this.http.get(`${environment.serverURL}/appointments/${userId}`, {
      headers: { 'content-type': 'application/json' }
    })
  }

  deleteAppointment(id: string, table?: number[]) {
    let url = `${environment.serverURL}/appointments/?id=${id}`;
    if (table !== undefined) {
      url += `&table=${table}`;
    }
    console.log(url)
    return this.http.delete(url, {headers: { 'content-type': 'application/json' }})
  }
}
