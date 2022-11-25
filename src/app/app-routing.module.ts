import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin-panel/admin/admin.component';
import { HomeComponent } from './componants/home/home.component';
import { CreatePalierFormComponent } from './componants/projets/create-projet-form/create-palier-form/create-palier-form.component';
import { CreateProjetFormComponent } from './componants/projets/create-projet-form/create-projet-form.component';
import { LoginComponent } from './componants/login/login.component';
import { RegisterComponent } from './componants/register/register.component';
// import { ShowComponent } from './componants/projets/show/show.component';
import { IndexComponent } from './componants/projets/index/index.component';

const routes: Routes = [ 
  {path:"card",component : IndexComponent},
  {path:"users",component : HomeComponent},
  {path:"home",component : HomeComponent},
  {path:"register",component : RegisterComponent},
  {path:"login",component : LoginComponent},
  //{path:'admin',component: AdminComponent, canActivate: []},
  {path:"createprojet",component : CreateProjetFormComponent},
  {path:"palier",component : CreatePalierFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
