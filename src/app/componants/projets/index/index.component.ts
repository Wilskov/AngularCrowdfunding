import { Component, Input, OnInit } from '@angular/core';
import { showProjetModel } from 'src/app/models/Projet.show.model';
import { ItestModel } from 'src/app/models/testModel';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  //@Input() projets! : showProjetModel
  //TODO tp data use input
  //*projet : showProjetModel = new showProjetModel(1,"titre 1","desc 1",50,"statu",10,[])

  listeProjet: ItestModel [] = [
    {id:1, titre: "titre 1", desc:"description number 1", image:"../../../assets/images/invest4.jpg"},
    {id:2, titre: "titre 2", desc:"description number 2", image:"../../../assets/images/invest5.jpg"},
    {id:3, titre: "titre 3", desc:"description number 3", image:"../../../assets/images/invest4.jpg"},
    {id:4, titre: "titre 4", desc:"description number 4", image:"../../../assets/images/invest5.jpg"},
    {id:5, titre: "titre 5", desc:"description number 5", image:"../../../assets/images/invest4.jpg"},
    {id:6, titre: "titre 6", desc:"description number 6", image:"../../../assets/images/invest5.jpg"}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
