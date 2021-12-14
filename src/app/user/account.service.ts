import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { catchError, map, Subject, throwError } from 'rxjs';
import { Account } from './account.model'
import {Professionals } from '../schedule/professionals.model'
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AccountService {

  accounts:Account[]=[];
  professionals:Professionals[]=[];

  private token:string;
  private tokenTimer: any;
  private isAuthenticated = false;
  private authStatusListener = new Subject<boolean>();
  usertokenName:string;

  constructor(private http:HttpClient, private router:Router) {
    
  }

  getToken(){
    return this.token;
  }
  
  getTokenName(){
    return this.usertokenName;
  }

  
  getAuthStatusListener() {
    return this.authStatusListener.asObservable();
  }


  getIsAuth() {
    return this.isAuthenticated;
  }




  getAccount(myLogin:Account){
    
    if (!myLogin) {
      return;
    }

    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    // add to database
  this.http.post<{ message: string, accounts: Account, token:string, usertokenName:string }>('http://localhost:3000/user',
  myLogin,
  { headers: headers })
  .subscribe(
    (responseData) => {
        //console.log('responsedata service',responseData);
        const token = responseData.token;
        this.token=token;

        const usertokenName = responseData.usertokenName;
        this.usertokenName=usertokenName;
        console.log(usertokenName, '--name right away');
        this.isAuthenticated = true;
        this.authStatusListener.next(true);
        this.router.navigate(['/schedule']);


        
       

        //if responded is successfull then store the Cache

    });
}


registerProf(myProf:Professionals){
  if(!myProf){
    return;
  }

  console.log(myProf);

  const headers = new HttpHeaders({'Content-Type': 'application/json'});
  // add to database
this.http.post<{ message: string, myprof: Professionals }>('http://localhost:3000/user/professionals',
myProf,
{ headers: headers })
.subscribe(
  (responseData) => {
      //console.log('responsedata service',responseData);
      this.router.navigate(["/"]);
  });





}





  registerAccount(myReg:Account){
    if(!myReg){
      return;
    }

    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    // add to database
  this.http.post<{ message: string, accounts: Account }>('http://localhost:3000/user/register',
  myReg,
  { headers: headers })
  .subscribe(
    (responseData) => {
        //console.log('responsedata service',responseData);
        this.router.navigate(["/"]);
    });


  }


  logout() {
    this.token = null;
    this.isAuthenticated = false;
    this.authStatusListener.next(false);
    this.router.navigate(["/"]);
  }

}

