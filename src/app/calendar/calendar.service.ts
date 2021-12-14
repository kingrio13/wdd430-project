import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map  } from 'rxjs/operators';
import { Subject, throwError } from 'rxjs';

import { Calendarappoint } from './calendar.model';
import { Appoint } from '../shared/appoint.model';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})


export class CalendarService {

  
  prof:Calendarappoint[]=[];
  profSelected = new Subject<Calendarappoint>();
  profListChangedEvent = new Subject <Calendarappoint[]>();
  error = new Subject<string>();


    constructor(private http:HttpClient, private router:Router) {
    }


    getProfessionals(){
    return this.http.get<{message:string, prof:any}>('http://localhost:3000/calendar')
    .pipe(map((profData)=>{  

   
      this.prof=profData.prof;
      this.profListChangedEvent.next(this.prof.slice());

      return this.prof;
    }), catchError(errorRes =>{
      return throwError(errorRes);
  }));
    }


    getSelectedProf(index:number){
      return this.prof[index];
     }



    updateAppointment(originalmyprof: Calendarappoint, myprof: Calendarappoint){
      if (!originalmyprof || !myprof) {
        return;
      }
   
      const pos = this.prof.findIndex(d => d._id === originalmyprof._id);
   
      if (pos < 0) {
        return;
      }



      
       // set the id of the new Document to the id of the old Document
       myprof._id = originalmyprof._id;
      //  //appdate: string, apptime: string, profid: string, userid: string
      //  console.log('original',this.prof[pos])
      //  const newmyprof = new Calendarappoint('', '2', '3', null)
      //  this.prof[pos] = newmyprof;
      //  console.log('updated',this.prof[pos]);




       

      const headers = new HttpHeaders({'Content-Type': 'application/json'});

            this.http.put('http://localhost:3000/calendar/' + originalmyprof._id, myprof, { headers: headers })
        .subscribe(() => {


          console.log('hey its update event')
          console.log(this.prof.slice());
           this.profListChangedEvent.next(this.prof.slice());

           this.router.navigate(['/schedule']);
           //reload for now as im not sure what to do with the joint information.
          //  window.location.reload();

          });
     


          
     }


     

     deleteAppointment(myprof:Calendarappoint){

      if (!myprof) {
        return;
      }

      const pos = this.prof.findIndex(d => d._id === myprof._id);

    
      if (pos < 0) {
        return;
      }
  
  
      // delete from database
      this.http.delete('http://localhost:3000/calendar/' + myprof._id)
        .subscribe(() => {
      
            this.prof.splice(pos, 1);
            this.profListChangedEvent.next(this.prof.slice());
           
          });

     }

   

}