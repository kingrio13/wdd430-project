import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { AppointService } from 'src/app/shared/appoint.service';
import { Professionals } from '../professionals.model';
import { ScheduleService } from '../schedule.service';

@Component({
  selector: 'app-schedule-edit',
  templateUrl: './schedule-edit.component.html',
  styleUrls: ['./schedule-edit.component.css']
})
export class ScheduleEditComponent implements OnInit {

  prof:Professionals;
  subscription:Subscription;
  id:number;

  profId='';

  availtimes = ['9:00', '10:00', '11:00', '12:00', '1:00', '2:00', '3:00', '4:00'];
  newTime = '10:00';
  
newDate:string;
newDatemin:string; //disable past dates

  constructor(
              private appointService:AppointService,
              private scheduleService:ScheduleService,
              private route:ActivatedRoute,
              private router:Router) { }

  ngOnInit(): void {



    this.newDate= new Date().toISOString().split('T')[0];
    this.newDatemin=new Date().toISOString().split('T')[0];


    this.subscription = this.route.params.subscribe((params: Params) => {
      this.id = params.id;
     
      this.prof = this.scheduleService.getSelectedProf(this.id)
    
      this.profId=this.prof._id;
      // console.log('hey',this.prof);

    });

  }


  onCancel(){
    this.router.navigate(['../'], {relativeTo:this.route});
  }


  onSubmit(form:NgForm){
    //console.log(form);
    const value = form.value;
    this.appointService.postAppoint(value);
    this.router.navigate(['/schedule']);
  }



}
