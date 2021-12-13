import { Component, Input, OnInit } from '@angular/core';
import { Professionals } from '../../professionals.model';

@Component({
  selector: 'app-schedule-item',
  templateUrl: './schedule-item.component.html',
  styleUrls: ['./schedule-item.component.css']
})
export class ScheduleItemComponent implements OnInit {
  @Input() professional: Professionals;
  @Input() index:number;

  
  constructor() { }

  ngOnInit(): void {
   
  }

}
