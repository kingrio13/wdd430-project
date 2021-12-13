import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userEmail='';
  userPassword='';
  userName='';
  userAddress='';
  userPhone='';
  

  constructor(private account:AccountService) { }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm) {
    const value = form.value;
    this.account.registerAccount(value);

  }



}
