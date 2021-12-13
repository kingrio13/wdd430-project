import { Component, OnInit } from '@angular/core';

import { Professionals } from '../professionals.model'
import { ScheduleService } from '../schedule.service'
 
@Component({
  selector: 'app-schedule-list',
  templateUrl: './schedule-list.component.html',
  styleUrls: ['./schedule-list.component.css']
})
export class ScheduleListComponent implements OnInit {

  constructor(private professionalService:ScheduleService) { }

  professionals:Professionals[]=[];


  ngOnInit(): void {
      this.professionalService.getProfessionals().subscribe(prof=>{
        this.professionals=prof;
     
      })
      
    
  }

}
