import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  faEyeSlash = faEyeSlash;
  faEye = faEye;

  public registrationForm: FormGroup;
  public hide = true;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authenticationService: AuthenticationService,
  ) { }

  ngOnInit() {
    this.registrationForm = this.formBuilder.group({
      email: new FormControl('', [Validators.required,
        Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]),
      password: new FormControl('', [Validators.required]),
    });

    this.authenticationService.loggedInObs.subscribe(response => {
      if (response === true) {
        this.router.navigate(['/']);
      }
    })
  }

  public hasError(controlName: string, errorName: string) {
    return this.registrationForm.controls[controlName].hasError(errorName);
  }

  public loginUser(form: FormGroup) {
    const user = {
      email: form['email'],
      password: form['password'],
    }
    this.authenticationService.userAuth(user, 'login');
  }

}
