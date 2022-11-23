import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { NewProjectComponent } from './new-project/new-project.component';
import { ProjetsComponent } from './projets/projets.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {path:"login", component: LoginComponent},
  {path:"admin", component: AdminComponent},
  {path:"new-projet",component:NewProjectComponent},
  { path :"projets", component : ProjetsComponent},
  { path :"users", component : UsersComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminPanelRoutingModule { }
