import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { HomeAdminComponent } from './admin/home-admin/home-admin.component';
import { NavbarAdminComponent } from './admin/navbar-admin/navbar.component';
import { AppComponent } from './app.component';
import { FooterComponent } from './users/componants/footer/footer.component';
import { HomeComponent } from './users/componants/home/home.component';
import { LoginComponent } from './users/componants/login/login.component';
import { NavbarComponent } from './users/componants/navbar/navbar.component';
import { CreatePalierFormComponent } from './users/componants/projets/create-projet-form/create-palier-form/create-palier-form.component';
import { CreateProjetFormComponent } from './users/componants/projets/create-projet-form/create-projet-form.component';
import { RegisterComponent } from './users/componants/register/register.component';
import { UsersComponent } from './users/users.component';


const appRoutes: Routes = [
  // {path: '/', component : AppComponent},
  // {
  //   path: 'admin',component: AdminComponent,
  //   canActivate: [],
  //   children: [
  //     { path: 'home-admin', component: HomeAdminComponent},
  //     { path: 'navbar-admin', component: NavbarAdminComponent},
  //     // Todo //{ path: '**', component: PageNotFoundComponent }
  //     //<-- place here others admin/private routes
  //   ],    
  // },
  // {
  //   path: 'users',
  //   component: UsersComponent,
  //   children: [
  //     { path: 'footer', component: FooterComponent},
  //     { path: 'home', component: HomeComponent},
  //     { path: 'login', component: LoginComponent},
  //     { path: 'navbar', component: NavbarComponent},
  //     { path: 'register', component: RegisterComponent},
  //     { path: 'createProject', component: CreateProjetFormComponent },
  //     { path: 'createPalier', component: CreatePalierFormComponent },
      
  //   ],        
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(
    appRoutes, { enableTracing: true } // <-- debugging purposes only 
  )],
  exports: [RouterModule]
})

export class AppRoutingModule { }
