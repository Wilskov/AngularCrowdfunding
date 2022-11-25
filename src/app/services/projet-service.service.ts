import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreateProjetModel } from '../models/CreateProjet.Model';
import { showProjetModel } from '../models/Projet.show.model';
import {HttpParams} from "@angular/common/http";
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})


export class ProjetServiceService {

  private _url : string = "http://localhost:5011/api/Project/";

  constructor(private _httpClient : HttpClient) {
  }

  getAll() : Observable<showProjetModel[]> {
    return this._httpClient.get<showProjetModel[]>(this._url);
  }


  getAllValidProjet() : Observable<showProjetModel[]> {
    return this._httpClient.get<showProjetModel[]>(this._url+'ProjectValider');
  }

  valideProjet(id:number) : Observable<boolean> {
    return this._httpClient.put<boolean>(this._url+'ValidProjet',{},{ params: new HttpParams().set('id', id) });
  }

  getById(id:number) : Observable<showProjetModel> {
    return this._httpClient.get<showProjetModel>(this._url+id);
  }

  UpdateProject(projet:showProjetModel): Observable<boolean> {
    return this._httpClient.put<boolean>(this._url,projet,{ params: new HttpParams().set('id', projet.id) })
  }

  delete(id :number):Observable<boolean>{
    return this._httpClient.delete<boolean>(this._url,{ params: new HttpParams().set('id', id) })
  }

  addProjet(projet:CreateProjetModel):Observable<boolean>{
    return this._httpClient.post<boolean>(this._url+"Project",projet)
  }


}
