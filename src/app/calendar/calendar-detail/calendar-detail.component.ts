import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { Calendarappoint } from '../calendar.model';
import { CalendarService } from '../calendar.service';

@Component({
  selector: 'app-calendar-detail',
  templateUrl: './calendar-detail.component.html',
  styleUrls: ['./calendar-detail.component.css']
})
export class CalendarDetailComponent implements OnInit, OnDestroy {

  constructor(
    private route:ActivatedRoute,
    private router:Router,
    private calendarService:CalendarService
  ) { }

  private myprofsChange:Subscription;
  myprofs: Calendarappoint;
  id:number;



  ngOnInit(): void {

    this.myprofsChange = this.route.params.subscribe(
      (params:Params)=>{
        this.id = +params['id'];
        this.myprofs = this.calendarService.getSelectedProf(this.id);

        //console.log('calendar-detail', this.myprofs)
      }) 


  }

  ngOnDestroy(): void {
      this.myprofsChange.unsubscribe();
  }


  onEdit(){
    this.router.navigate(['edit'], {relativeTo:this.route});
  }



  onDelete(){

    //console.log('delete this id', this.myprofs._id);
    this.calendarService.deleteAppointment(this.myprofs);
    this.router.navigate(['/appointment']);

  }

}
