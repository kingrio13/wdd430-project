import { Component, OnInit } from '@angular/core';
import { Calendarappoint } from './calendar.model';
import { CalendarService } from './calendar.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  selectedProfession:Calendarappoint;


  constructor(private calendarService:CalendarService) { }

  ngOnInit(): void {

    
    this.calendarService.profSelected.subscribe((prof)=>{
      this.selectedProfession=prof;
    })


  }

}
