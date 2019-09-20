import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  private userEmail: string

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.userEmail = this.authenticationService.getUserEmailLocal();
     
  }

  logOutUser() {
    this.authenticationService.logOut();
    this.userEmail = null;
  }

}
