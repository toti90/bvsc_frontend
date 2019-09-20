import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private readonly EMAIL = 'email';
  private readonly ID = 'id';

  private loggedIn = new Subject<boolean>();
  loggedInObs = this.loggedIn.asObservable();

  constructor(private http: HttpClient) { }

  userAuth(user: object, route: string) {
    return this.http.post(`${environment.serverURL}/${route}/`, user, {
      headers: { 'content-type': 'application/json' },
    }).subscribe(response => {
      if (response['email']) {
        console.log(response)
        localStorage.setItem(this.EMAIL, response['email']);
        localStorage.setItem(this.ID, response['_id']);
        this.loggedIn.next(true);
      } else {
        this.loggedIn.next(false);
      }
    }, err => console.log(err));
  }

  getUserIdLocal() {
    return localStorage.getItem(this.ID);
  }

  getUserEmailLocal() {
    return localStorage.getItem(this.EMAIL);
  }

  logOut() {
    localStorage.removeItem(this.EMAIL);
  }
}
