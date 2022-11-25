import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componants/home/home.component';
import { LoginComponent } from './componants/login/login.component';
import { CreatePalierFormComponent } from './componants/projets/create-projet-form/create-palier-form/create-palier-form.component';
import { CreateProjetFormComponent } from './componants/projets/create-projet-form/create-projet-form.component';
import { IndexComponent } from './componants/projets/index/index.component';
import { RegisterComponent } from './componants/register/register.component';

const usersRoutes: Routes = [
  { path : "home",component : HomeComponent},
  { path : "register", component : RegisterComponent},
  { path : "login", component : LoginComponent},
  { path : "createprojet", component : CreateProjetFormComponent},
  { path : "palier", component : CreatePalierFormComponent},
  { path : "index", component : IndexComponent},
];

@NgModule({
  imports: [RouterModule.forChild(usersRoutes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
