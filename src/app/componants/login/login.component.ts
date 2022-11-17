import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm : FormGroup;

  constructor(  private _fb : FormBuilder,
                private _authService : AuthService,
                private _router : Router) { 

    this.loginForm = this._fb.group({
      email : [null, [Validators.required]],
      password : [null, [Validators.required]]
    })
  }

  ngOnInit(): void {
  }

  login() : void {
    if(this.loginForm.valid){
      this._authService.login(this.loginForm.value)
    }
    else {
      this.loginForm.markAllAsTouched();
    }
  }

}
