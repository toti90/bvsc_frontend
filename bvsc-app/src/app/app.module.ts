import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DaysComponent } from './components/days/days.component';
import { MakeHungarianDayPipe } from './pipes/makeHungarian/make-hungarian-day.pipe';
import { NumberHourConverterPipe } from './pipes/numberHourConverter/number-hour-converter.pipe';
import { BigHallComponent } from './components/big-hall/big-hall.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule, MatNativeDateModule, MatMenuModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import {MatIconModule} from '@angular/material/icon';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { StepperHeadComponent } from './components/stepper-head/stepper-head.component';
import {MatDialogModule} from '@angular/material/dialog';
import { PopupConfirmationComponent } from './components/popup-confirmation/popup-confirmation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { SnackBarComponent } from './components/snack-bar/snack-bar.component';
import { HeaderComponent } from './components/header/header.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { AppointmentsComponent } from './components/appointments/appointments.component';




@NgModule({
  declarations: [
    AppComponent,
    DaysComponent,
    MakeHungarianDayPipe,
    BigHallComponent,
    NumberHourConverterPipe,
    StepperHeadComponent,
    PopupConfirmationComponent,
    SnackBarComponent,
    HeaderComponent,
    RegisterComponent,
    LoginComponent,
    AppointmentsComponent  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    MatMenuModule,
    HttpClientModule,
    MatIconModule,
    FontAwesomeModule,
    MatDialogModule,
    FormsModule,
    MatSnackBarModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ PopupConfirmationComponent, SnackBarComponent]
})
export class AppModule { }
