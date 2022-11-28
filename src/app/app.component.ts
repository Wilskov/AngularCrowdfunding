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
  
  isAdmin: boolean = false; 

  constructor (private router : Router, private authService : AuthService) {
    authService.connectedUser$.subscribe((u:ConnectedUsermodel | null) => {
      this.isAdmin = u ? (u.role === "Admin") : false
      console.log(`is admin ${this.isAdmin}`)
    })
  }

}
