import { Component, OnInit } from '@angular/core';
import { showProjetModel } from 'src/app/models/Projet.show.model';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  projets : showProjetModel = new showProjetModel(1,"titre 1","desc 1",10000,"statu",5000,[])
  progress : number = 50

  constructor() { }

  ngOnInit(): void {
  }

}
