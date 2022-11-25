import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  private isConnected : boolean = false

  constructor(private authService : AuthService,private router: Router) { }

  ngOnInit(): void {
    this.authService.isConnected$.subscribe( c => this.isConnected = c ? true : false  )
  }

  goToCreatProjet(){
    if( this.isConnected )
      this.router.navigate(["createprojet"])//TODO check is projectOwner
    else
    this.router.navigate(["login"])
  }

}
