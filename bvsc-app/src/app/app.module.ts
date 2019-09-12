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


@NgModule({
  declarations: [
    AppComponent,
    DaysComponent,
    MakeHungarianDayPipe,
    BigHallComponent,
    NumberHourConverterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    MatMenuModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
