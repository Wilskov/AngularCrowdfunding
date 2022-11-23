import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  
  isVisible: boolean = true; 

  title = 'AngularCrowdfunding'
  test : string = "test"
  constructor (private router : Router, private authService : AuthService) {
    authService.isConnected$.subscribe((u) => {
      this.isVisible = u ? true : (u.role == "Admin")
    })
  }

}
