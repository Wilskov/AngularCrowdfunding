import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IRole } from 'src/app/Interface/role';
import { RegisterUserModel } from 'src/app/models/RegisterUser.model';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})


export class RegisterComponent implements OnInit {

 typeDeRole : IRole[] = [
  {id:2, role:"Contributeur"},
  {id:3, role:"projectOwner"},
 ]




  registerForm : FormGroup;

  constructor(private _fb : FormBuilder,
              private _authService : AuthService,
              private _router : Router) {

      this.registerForm = _fb.group({
        nickname : [null, [Validators.required]],
        email : [null, [Validators.required, Validators.email]],
        password : [null, [Validators.required] ],//,Validators.minLength(8), Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W|_]).+$/)]
        confirmPassword : [null, [Validators.required]],
        birtDay : [null, [Validators.required]],
        role : [[], [Validators.required]]
        }, { validators : [ this.passwordValidator ] })
  }

  ngOnInit(): void {

  }

  register() : void {
    console.log(this.registerForm.value)
    if(this.registerForm.valid){
      console.log(this.registerForm.value)     
      const rum = new  RegisterUserModel( this.registerForm.value.email,
                                          this.registerForm.value.password,
                                          this.registerForm.value.nickname,
                                          this.registerForm.value.birtDay,
                                          Number(this.registerForm.value.role)
                                          )
      this._authService.register(rum)
    }
    else {
      this.registerForm.markAllAsTouched()
    }
  }

  passwordValidator(group : AbstractControl): ValidationErrors | null {

    if(group.get('password')?.value == "" || group.get('confirmPassword')?.value == "")
      return null

    if(group.get('password')?.value === group.get('confirmPassword')?.value)
      return null

    return { notsame : true }
  }

}
