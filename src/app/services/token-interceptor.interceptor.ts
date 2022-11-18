import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptorInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    let token : string | null = localStorage.getItem('token');
    if(token && token != ''){
      let clonedRequest = request.clone({ setHeaders : { 'Authorization' : 'Bearer ' + token }})
      return next.handle(clonedRequest); 
    }
    return next.handle(request);
  }
}
