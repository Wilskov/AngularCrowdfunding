import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { NavbarComponent } from '../admin/navbar-admin/navbar.component';
import { AppComponent } from '../app.component';
import { FooterComponent } from './componants/footer/footer.component';
import { HomeComponent } from './componants/home/home.component';
import { LoginComponent } from './componants/login/login.component';
import { CreatePalierFormComponent } from './componants/projets/create-projet-form/create-palier-form/create-palier-form.component';
import { CreateProjetFormComponent } from './componants/projets/create-projet-form/create-projet-form.component';
import { RegisterComponent } from './componants/register/register.component';


@NgModule({
  declarations: [
    UsersComponent,
    AppComponent,
    LoginComponent,
    RegisterComponent,
    CreateProjetFormComponent,
    CreatePalierFormComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
