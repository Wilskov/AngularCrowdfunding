import { Component, Input, OnInit } from '@angular/core';
import { showProjetModel } from 'src/app/models/Projet.show.model';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  //@Input() projets! : showProjetModel
  //TODO tp data use input
  public projet : showProjetModel = new showProjetModel(1,"titre 1","desc 1",50,"statu",10,[]);

  constructor() { }

  ngOnInit(): void {
  }

}
