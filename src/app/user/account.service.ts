import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { catchError, map, throwError } from 'rxjs';
import { Account } from './account.model'


@Injectable({
  providedIn: 'root'
})
export class AccountService {

  accounts:Account[]=[];



  constructor(private http:HttpClient) {
    
  }


  getAccount(myLogin:Account){
    
    if (!myLogin) {
      return;
    }

    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    // add to database
  this.http.post<{ message: string, accounts: Account }>('http://localhost:3000/user',
  myLogin,
  { headers: headers })
  .subscribe(
    (responseData) => {
        console.log('responsedata service',responseData);

        //if responded is successfull then store the Cache

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
        console.log('responsedata service',responseData);
    });


  }

}

