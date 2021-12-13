import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  userEmail='';
  userPassword='';

  constructor(private account:AccountService) { }

  ngOnInit(): void {
  }


  
  onSubmit(form:NgForm) {
      const value = form.value;
      this.account.getAccount(value);
  }

}