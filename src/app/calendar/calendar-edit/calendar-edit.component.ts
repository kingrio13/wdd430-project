import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Appoint } from 'src/app/shared/appoint.model';
import { Calendarappoint } from '../calendar.model';
import { CalendarService } from '../calendar.service';

@Component({
  selector: 'app-calendar-edit',
  templateUrl: './calendar-edit.component.html',
  styleUrls: ['./calendar-edit.component.css']
})
export class CalendarEditComponent implements OnInit {

  private myprofsChange:Subscription;
  myprofs: Calendarappoint;

  subscription:Subscription;

  id:number;
  originalMyProf: Calendarappoint;



  availtimes = ['8:00','9:00', '10:00', '11:00', '12:00', '1:00', '2:00', '3:00', '4:00'];
 
  
  newDate:string;
  newDatemin:string; //disable past dates
  newTimeSelected:string;
  calId:string;
  

  
  constructor(
    private route:ActivatedRoute,
    private router:Router,
    private calendarService:CalendarService
    
  ) { }

  

  ngOnInit(): void {

    // console.log('calendar edit page baby');
 


    this.subscription = this.route.params.subscribe((params: Params) => {
      this.id = params.id;
      if (!this.id) {
        return;
      }
      this.originalMyProf = this.calendarService.getSelectedProf(this.id);

      //console.log('CE',this.originalMyProf);



      // this.newTime = this.originalMyProf.appTime;
      // console.log('this NT', this.newTime);
    

      if (!this.originalMyProf) {
        return;
      }
 
      this.myprofs = JSON.parse(JSON.stringify(this.originalMyProf));
      this.initForm();

    });

  }


  onSubmit(form:NgForm) {
    //check editmode
    
     console.log(form.value);

     const value = form.value;

     //const myprof = new Appoint(value.newDate, value.newDate, value.newTime, value.newDate);
   
    


    this.calendarService.updateAppointment(this.originalMyProf, value);
    this.router.navigate(['/appointment']);

  }


  onCancel(){
    this.router.navigate(['../'], {relativeTo:this.route});
  }



  private initForm(){
    this.newDate= this.originalMyProf.appDate;
    this.newTimeSelected = this.originalMyProf.appTime;

    this.calId=this.originalMyProf._id;
  }

}
