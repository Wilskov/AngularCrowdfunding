import { Component, Input, OnInit } from '@angular/core';
import { ItestModel } from 'src/app/models/testModel';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() projet! : ItestModel

  constructor() { }

  ngOnInit(): void {
  }

}
