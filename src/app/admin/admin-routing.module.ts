import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { NavbarAdminComponent } from './navbar-admin/navbar.component';

const adminRoutes: Routes = [
  { path : "home-admin",component : HomeAdminComponent},
  { path : "navbar", component : NavbarAdminComponent},
];

@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
