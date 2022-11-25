import { Component, Input, OnInit } from '@angular/core';
import { FormGroup  } from '@angular/forms';
import { CreatProjetFormServiceService } from 'src/app/users/services/creat-projet-form-service.service';


@Component({
  selector: 'app-create-palier-form',
  templateUrl: './create-palier-form.component.html',
  styleUrls: ['./create-palier-form.component.scss']
})
export class CreatePalierFormComponent implements OnInit {

  @Input() index : number = 0

  palierForm! : FormGroup


  constructor( private cpfs : CreatProjetFormServiceService ) {
  }

  ngOnInit(): void {
    this.palierForm = this.cpfs.projetForm.value["paliers"][this.index]
    console.log(this.index)
    
  }

  removePlier(){
    this.cpfs.removePalier(this.index)
  }

}
