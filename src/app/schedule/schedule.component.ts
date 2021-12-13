import { Component, OnInit } from '@angular/core';
import { Professionals } from './professionals.model';
import { ScheduleService } from './schedule.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  selectedProfession:Professionals;

  constructor(private scheduleService:ScheduleService) { }



  ngOnInit(): void {

    this.scheduleService.profSelected.subscribe((prof)=>{
      this.selectedProfession=prof;
    })

  }

}
