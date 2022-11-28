import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { loginModel } from '../models/login.model';
import { ConnectedUsermodel } from '../models/ConnectedUser.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _url : string = "http://localhost:5011/api/User/";

  private _connectedUser$ : BehaviorSubject<ConnectedUsermodel | null> = new BehaviorSubject<ConnectedUsermodel | null>(null);
  connectedUser$ : Observable<ConnectedUsermodel | null> = this._connectedUser$.asObservable();
  ConnectedUser : ConnectedUsermodel | null = null



  constructor(private _httpClient : HttpClient) {
    //update ConnectedUser to get conected without subcribe
    this._connectedUser$.subscribe( u => this.ConnectedUser = u )
  }

  getAll() : Observable<ConnectedUsermodel[]> {
    return this._httpClient.get<ConnectedUsermodel[]>(this._url);
  }


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
    console.log(user)//TODO remove log
    localStorage.setItem('token', user.token);
    this._connectedUser$.next(user);
  }

  logout() : void {
    localStorage.removeItem('token');
    this._connectedUser$.next(null);
  }
}
