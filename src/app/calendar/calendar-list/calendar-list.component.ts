import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Calendarappoint } from '../calendar.model';

import { CalendarService } from '../calendar.service';

@Component({
  selector: 'app-calendar-list',
  templateUrl: './calendar-list.component.html',
  styleUrls: ['./calendar-list.component.css']
})
export class CalendarListComponent implements OnInit, OnDestroy {


  myprof:Calendarappoint[]=[];

  profListChange:Subscription;
  profInit:Subscription;

  constructor(private calendarService:CalendarService) { }

  ngOnInit(): void {

    this.profInit = this.calendarService.getProfessionals().subscribe(prof=>{
      this.myprof=prof;
     
    })



   this.profListChange = this.calendarService.profListChangedEvent
   .subscribe((myappointment:Calendarappoint[])=>{
      this.myprof = myappointment;
      //console.log('hey theres changes',this.myprof);
   });


  }

  ngOnDestroy(): void {
      this.profListChange.unsubscribe();
      this.profInit.unsubscribe();
  }

}
