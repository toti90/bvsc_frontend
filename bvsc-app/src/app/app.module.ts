import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DaysComponent } from './components/days/days.component';
import { MakeHungarianDayPipe } from './pipes/make-hungarian-day.pipe';
import { BigHallComponent } from './components/big-hall/big-hall.component';

@NgModule({
  declarations: [
    AppComponent,
    DaysComponent,
    MakeHungarianDayPipe,
    BigHallComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
