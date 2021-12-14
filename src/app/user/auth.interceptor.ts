import {
    HttpInterceptor,
    HttpRequest,
    HttpHandler
  } from "@angular/common/http";
  import { Injectable } from "@angular/core";
  
  import { AccountService } from "./account.service";
  
  @Injectable()
  export class AuthInterceptor implements HttpInterceptor {
    constructor(private authService: AccountService) {}
  
    intercept(req: HttpRequest<any>, next: HttpHandler) {
      const authToken = this.authService.getToken();
      const authRequest = req.clone({
        headers: req.headers.set("Authorization", "Bearer " + authToken)
      });
      return next.handle(authRequest);
    }
  }
  