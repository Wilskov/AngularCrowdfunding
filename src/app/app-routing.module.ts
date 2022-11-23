import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin-panel/admin/admin.component';
import { HomeComponent } from './componants/home/home.component';
import { LoginComponent } from './componants/login/login.component';
import { RegisterComponent } from './componants/register/register.component';

const routes: Routes = [ 
  {path:"users",component:HomeComponent},
  {path:"home",component:HomeComponent},
  { path : "register", component : RegisterComponent},
  { path : "login", component : LoginComponent},
  { path: 'admin', component: AdminComponent, canActivate: [AuthenticationGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
