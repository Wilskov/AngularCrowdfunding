import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrls: ['./home-admin.component.scss']
})
export class HomeAdminComponent implements OnInit {
 
  projects: any;
  users: any;

  AcceptNewProject(_t11: any) {
    throw new Error('Method not implemented.');
  }

  RefuseNewProject(_t11: any) {
    throw new Error('Method not implemented.');
  }

  deleteProject(_t27: any) {
    throw new Error('Method not implemented.');
  }

  editProject(_t27: any) {
    throw new Error('Method not implemented.');
  }

  constructor() { }

  ngOnInit(): void {
  }

}
