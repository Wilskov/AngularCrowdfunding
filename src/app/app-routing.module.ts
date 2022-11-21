import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePalierFormComponent } from './componants/create-projet-form/create-palier-form/create-palier-form.component';
import { CreateProjetFormComponent } from './componants/create-projet-form/create-projet-form.component';
import { LoginComponent } from './componants/login/login.component';
import { RegisterComponent } from './componants/register/register.component';

const routes: Routes = [
  { path : "", component : RegisterComponent},
  { path : "login", component : LoginComponent},
  { path : "projet", component : CreateProjetFormComponent},
  { path : "palier", component : CreatePalierFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
