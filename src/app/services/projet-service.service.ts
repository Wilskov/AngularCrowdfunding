import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreateProjetModel } from '../models/CreateProjet.Model';
import { showProjetModel } from '../models/Projet.show.model';
import {HttpParams} from "@angular/common/http";
import { BehaviorSubject, Observable } from 'rxjs';
import { ContributionModel } from '../models/Contribution.Model';
import { AuthService } from './auth.service';
import { ConnectedUsermodel } from '../models/ConnectedUser.model';


@Injectable({
  providedIn: 'root'
})


export class ProjetServiceService {

  private _url : string = "http://localhost:5011/api/";

  constructor(private _httpClient : HttpClient,private authSer : AuthService) {
  }

  getAll() : Observable<showProjetModel[]> {
    return this._httpClient.get<showProjetModel[]>(this._url+"Project/");
  }

  getAllValidProjet() : Observable<showProjetModel[]> {
    return this._httpClient.get<showProjetModel[]>(this._url+"Project/ProjectValider");
  }

  valideProjet(id:number) : Observable<boolean> {
    return this._httpClient.put<boolean>(this._url+"Project/ValidProjet",{},{ params: new HttpParams().set('id', id) });
  }

  getById(id:number) : Observable<showProjetModel> {
    return this._httpClient.get<showProjetModel>(this._url+"Project/"+id);
  }

  UpdateProject(projet:showProjetModel): Observable<boolean> {
    return this._httpClient.put<boolean>(this._url+"Project/",projet,{ params: new HttpParams().set('id', projet.id) })
  }

  delete(id :number):Observable<boolean>{
    return this._httpClient.delete<boolean>(this._url+"Project/",{ params: new HttpParams().set('id', id) })
  }

  addProjet(projet:CreateProjetModel):Observable<boolean>{
    return this._httpClient.post<boolean>(this._url+"Project/Project",projet)
  }

  addContribution(cnt : ContributionModel):Observable<boolean>{

    if(this.authSer.ConnectedUser === null) {
      console.log("not connected")
      return new BehaviorSubject<boolean>(false)
    }

    if(this.authSer.ConnectedUser.role != "Contributeur") {
      console.log("not a Contributeur")
      return new BehaviorSubject<boolean>(false)
    }

    cnt.idUser = this.authSer.ConnectedUser.id
    return this._httpClient.post<boolean>(this._url+"Contributions",cnt)
  }


}
