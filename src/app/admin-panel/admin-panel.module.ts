import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminPanelRoutingModule } from './admin-panel-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { AdminRoutingModule } from '../admin-routing.module';
import { AdminComponent } from './admin/admin.component';
import { ProjetsComponent } from './projets/projets.component';
import { UsersComponent } from './users/users.component';
import { NewProjectComponent } from './new-project/new-project.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    NavbarComponent,
    AdminComponent,
    ProjetsComponent,
    UsersComponent,
    NewProjectComponent,
    LoginComponent,
    
  ],
  imports: [
    CommonModule,
    AdminPanelRoutingModule,
    AdminRoutingModule,
    ReactiveFormsModule
  ], 
  exports: [
    
  ],
  bootstrap : [AdminComponent]

})
export class AdminPanelModule { }
