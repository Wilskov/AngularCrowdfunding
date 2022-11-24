import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ConnectedUsermodel } from './models/ConnectedUser.model';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  
  isAdmin: boolean = true; 

  title = 'AngularCrowdfunding'
  test : string = "test"
  constructor (private router : Router, private authService : AuthService) {
    authService.isConnected$.subscribe((u:ConnectedUsermodel | null) => {
      // let u2 : ConnectedUsermodel = u
      // this.isAdmin = u ? true : (u?.role == "Admin")
    })
  }

}
