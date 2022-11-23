import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CreatPalierModel } from 'src/app/models/CreatePalier.Model';
import { CreatProjetFormServiceService } from 'src/app/services/creat-projet-form-service.service';

@Component({
  selector: 'app-create-projet-form',
  templateUrl: './create-projet-form.component.html',
  styleUrls: ['./create-projet-form.component.scss']
})
export class CreateProjetFormComponent implements OnInit {
  
  constructor(public cpfs : CreatProjetFormServiceService){
  }

  ngOnInit(): void {
  }

  submit() : void {  
    console.log(this.cpfs.projetForm?.value)
    this.cpfs.projetForm?.value["paliers"].forEach( (e: FormGroup) => {
      console.log(e.value)
    });

    
    this.cpfs.projetForm.markAllAsTouched()
    this.cpfs.projetForm?.value["paliers"].forEach( (e: FormGroup) => {
      e.markAllAsTouched()
    });
  }

  addPalier() : void {
    this.cpfs.addPalier()
  }

}
