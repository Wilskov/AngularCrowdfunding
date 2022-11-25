import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { UsersModule } from "../users/users.module";
import { NavbarComponent } from './navbar-admin/navbar.component';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { LoginComponent } from '../users/componants/login/login.component';
import { CreatePalierFormComponent } from '../users/componants/projets/create-projet-form/create-palier-form/create-palier-form.component';
import { CreateProjetFormComponent } from '../users/componants/projets/create-projet-form/create-projet-form.component';
import { RegisterComponent } from '../users/componants/register/register.component';


@NgModule({
    declarations: [
        AdminComponent,
        NavbarComponent,
        HomeAdminComponent,
        // LoginComponent,
        // RegisterComponent,
        // CreateProjetFormComponent,
        // CreatePalierFormComponent,
    ],
    imports: [
        CommonModule,
        AdminRoutingModule,
        
    ]
})
export class AdminModule { }
