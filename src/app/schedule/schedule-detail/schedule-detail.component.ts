import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AccountService } from 'src/app/user/account.service';
import { Professionals } from '../professionals.model';
import { ScheduleService } from '../schedule.service';

@Component({
  selector: 'app-schedule-detail',
  templateUrl: './schedule-detail.component.html',
  styleUrls: ['./schedule-detail.component.css']
})
export class ScheduleDetailComponent implements OnInit, OnDestroy {

private profChange:Subscription;

prof: Professionals;
id:number;
userIsAuthenticated = false;
private authStatusSub: Subscription;

  constructor(
    private route:ActivatedRoute,
    private router:Router,
    private scheduleService:ScheduleService,
    private authService:AccountService
    ) { }

  ngOnInit(): void {
    // console.log('sched time');

        this.profChange = this.route.params.subscribe(
          (params:Params)=>{
            this.id = +params['id'];
            this.prof = this.scheduleService.getSelectedProf(this.id);

           //console.log(this.prof);
          })  
          
          this.userIsAuthenticated = this.authService.getIsAuth();
          this.authStatusSub = this.authService
            .getAuthStatusListener()
            .subscribe(isAuthenticated => {
              this.userIsAuthenticated = isAuthenticated;
            });


          
  }


  onSetAppointment(id:number){
    //console.log('apointment', id);
    
      this.router.navigate(['new'], {relativeTo:this.route});

  }

  ngOnDestroy(): void {
      this.authStatusSub.unsubscribe();
  }

}
