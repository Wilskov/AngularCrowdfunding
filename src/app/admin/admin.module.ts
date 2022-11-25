import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { NavbarAdminComponent } from './navbar-admin/navbar.component';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UsersRoutingModule } from '../users/users-routing.module';


@NgModule({
    declarations: [
        AdminComponent,
        NavbarAdminComponent,
        HomeAdminComponent,
      
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        UsersRoutingModule
    ],
    // bootstrap: [AdminComponent]
})
export class AdminModule { }
