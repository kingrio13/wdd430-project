import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Subject } from 'rxjs';

import { Professionals } from './professionals.model';


@Injectable({
  providedIn: 'root'
})


export class ScheduleService {

prof:Professionals[]=[];

  profSelected = new Subject<Professionals>();





    constructor(private http:HttpClient) {
    }


    getProfessionals(){
    return this.http.get<{message:string, prof:any}>('http://localhost:3000/schedule')
    .pipe(map((profData)=>{  


      return this.prof = profData.prof;

 
    }))
    }


    getSelectedProf(index:number){
      return this.prof[index];
     }
   

}