import { Component, OnInit } from '@angular/core';
import { showProjetModel } from 'src/app/models/Projet.show.model';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss']
})
export class ShowComponent implements OnInit {

  //@Input() projets! : showProjetModel
  //TODO tp data use input
  projet : showProjetModel = new showProjetModel(1,"titre 1","desc 1",50,"statu",10,[],"BE 47",new Date(),new Date())

  constructor() { }

  ngOnInit(): void {
  }

}