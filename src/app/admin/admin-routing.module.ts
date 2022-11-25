import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { NavbarComponent } from './navbar-admin/navbar.component';

const routes: Routes = [
  { path : "home-admin",component : HomeAdminComponent},
  { path : "login", component : NavbarComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
