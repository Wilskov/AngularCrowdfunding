import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { loginModel } from '../models/login.model';
import { ConnectedUsermodel } from '../models/ConnectedUser.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _url : string = "http://localhost:5011/api/User/";

  private _isConnected$ : BehaviorSubject<ConnectedUsermodel | null> = new BehaviorSubject<ConnectedUsermodel | null>(null);
  isConnected$ : Observable<ConnectedUsermodel | null> = this._isConnected$.asObservable();

  constructor(private _httpClient : HttpClient, private _router : Router) { }


  register(registerForm : any) : void {
    this._httpClient.post<ConnectedUsermodel>(this._url+'register', registerForm).subscribe({
      next : (res) => {
        this.connectUser(res)
      }
    });
  }

  login(loginForm : loginModel) : void {
    console.log(loginForm)
    this._httpClient.post<ConnectedUsermodel>(this._url+'login', loginForm).subscribe({
      next : (res) => {
        this.connectUser(res)
      }
    }
    );
  }

  private connectUser(user : ConnectedUsermodel):void{
    localStorage.setItem('token', user.token);
    this._isConnected$.next(user);
  }

  logout() : void {
    localStorage.removeItem('token');
    this._isConnected$.next(null);
  }
}
