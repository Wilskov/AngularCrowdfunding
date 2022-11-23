import { Injectable } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CreatPalierModel } from 'src/app/models/CreatePalier.Model';

@Injectable({
  providedIn: 'root'
})
export class CreatProjetFormServiceService {

  projetForm : FormGroup;

  constructor(private _builder : FormBuilder) {

    this.projetForm = this._builder.group({
      title : [null,[Validators.required]],
      dateDebut : [null,[Validators.required]],
      dateFin : [null,[Validators.required]],
      objectif : [null,[Validators.required]],
      description : [null,[Validators.required]],
      compteBQ : [null,[Validators.required]],
      paliers : [[],[Validators.required]]
    })
    this.addPalier()
    this.addPalier()
    this.addPalier()

  }

  addPalier(){
    this.projetForm.value.paliers.push( this._builder.group({
      title : [null , [Validators.required]],
      montant : [null, [Validators.required]],
      description : [null, [Validators.required]]
    }))
  }

  removePalier(index : number){
    this.projetForm.value.paliers.splice(index,1)
  }
}
