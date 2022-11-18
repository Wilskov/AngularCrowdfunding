import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componants/login/login.component';
import { RegisterComponent } from './componants/register/register.component';

const routes: Routes = [
  { path : "", component : RegisterComponent},
  { path : "login", component : LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
