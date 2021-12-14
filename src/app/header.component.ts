import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AccountService } from './user/account.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',

})
export class HeaderComponent implements OnInit, OnDestroy {


  userIsAuthenticated = false;
  usertokenName:string;

  private authListenerSubs: Subscription;
  private authName:Subscription;
  
  constructor(private authService:AccountService) { }



  ngOnInit(): void {
    this.userIsAuthenticated = this.authService.getIsAuth();
    this.authListenerSubs = this.authService
    .getAuthStatusListener()
    .subscribe(isAuthenticated => {
      this.userIsAuthenticated = isAuthenticated;
      this.usertokenName = this.authService.getTokenName();
      
      console.log('header', this.usertokenName);
      console.log('headertoken', this.authService.getToken())
    });





  }

  ngOnDestroy(): void {
      this.authListenerSubs.unsubscribe();
  }

  onLogout(){
   this.authService.logout();
  }

}
