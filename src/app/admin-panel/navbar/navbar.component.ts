import { Component, OnInit } from '@angular/core';
import { Link } from '../models/link';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  item: any;

  constructor() { }

  ngOnInit(): void {
  }

  link: Link[] = [
    {
      title: "AdminPanel", url: "/home"
    },
    {
      title: "Routes", url: "/route", children: [
        { title: "Les Demandes", url: "/route/demande" },
        { title: "Les Projets", url: "/route/projet" },
        { title: "Les Membres", url: "/route/membre" },
        
      ], isVisible: true
    },
  ];

}


