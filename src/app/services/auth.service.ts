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

  private _isConnected$ : BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  isConnected$ : Observable<boolean> = this._isConnected$.asObservable();

  constructor(private _httpClient : HttpClient, private _router : Router) { }


  register(registerForm : any) : void {
    /*this._httpClient.post<Token>(this._url+'register', registerForm).subscribe({
      next : (res) => {
        //On met le token en localStorage
        localStorage.setItem('token', res.token);
        this._isConnected$.next(true);
        this._router.navigateByUrl('/');

      }
    });*/
  }

  login(loginForm : loginModel) : void {
    console.log(loginForm)
    this._httpClient.post<ConnectedUsermodel>(this._url+'login', loginForm).subscribe({
      next : (res) => {
        console.log(res)
        /*localStorage.setItem('token', res.token);
        this._isConnected$.next(true);
        this._router.navigateByUrl('/');*/
      }
    }
    );
  }

  logout() : void {
    localStorage.removeItem('token');
    this._isConnected$.next(false);
    this._router.navigateByUrl('/');
  }
}
