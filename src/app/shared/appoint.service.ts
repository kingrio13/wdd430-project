import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Appoint } from './appoint.model';





@Injectable({
  providedIn: 'root'
})




export class AppointService{

    
  constructor(private http:HttpClient) {

  }

    appoints :Appoint[]=[];


        postAppoint(appoint:Appoint){
            if(!appoint){
                return;
              }
          
              const headers = new HttpHeaders({'Content-Type': 'application/json'});
              // add to database

             //console.log('im on appoint sevice')
            this.http.post<{ message: string, appoints: Appoint }>('http://localhost:3000/schedule/set-appointment',
            appoint,
            { headers: headers })
            .subscribe(
              (responseData) => {
                  //console.log('responsedata service',responseData);
              });
          
        }

}