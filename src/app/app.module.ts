import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { ScheduleComponent } from './schedule/schedule.component';

import { CalendarComponent } from './calendar/calendar.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { MysettingComponent } from './user/mysetting/mysetting.component';
import { ProfileComponent } from './user/profile/profile.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule  } from '@angular/common/http';
import { ScheduleListComponent } from './schedule/schedule-list/schedule-list.component';
import { ScheduleEditComponent } from './schedule/schedule-edit/schedule-edit.component';
import { ScheduleDetailComponent } from './schedule/schedule-detail/schedule-detail.component';
import { ScheduleItemComponent } from './schedule/schedule-list/schedule-item/schedule-item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarListComponent } from './calendar/calendar-list/calendar-list.component';
import { CalendarItemComponent } from './calendar/calendar-list/calendar-item/calendar-item.component';
import { CalendarDetailComponent } from './calendar/calendar-detail/calendar-detail.component';
import { CalendarEditComponent } from './calendar/calendar-edit/calendar-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ScheduleComponent,

    CalendarComponent,
    DropdownDirective,
    MysettingComponent,
    ProfileComponent,
    LoginComponent,
    RegisterComponent,
    ScheduleListComponent,
    ScheduleEditComponent,
    ScheduleDetailComponent,
    ScheduleItemComponent,
    CalendarListComponent,
    CalendarItemComponent,
    CalendarEditComponent,
    CalendarDetailComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
