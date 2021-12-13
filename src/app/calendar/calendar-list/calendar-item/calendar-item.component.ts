import { Component, Input, OnInit } from '@angular/core';
import { Calendarappoint } from '../../calendar.model';

@Component({
  selector: 'app-calendar-item',
  templateUrl: './calendar-item.component.html',
  styleUrls: ['./calendar-item.component.css']
})
export class CalendarItemComponent implements OnInit {

  @Input() myprofs: Calendarappoint;
  @Input() index:number;

  
  constructor() { }

  ngOnInit(): void {
     
  }

}
