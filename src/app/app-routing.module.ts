import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componants/home/home.component';
import { LoginComponent } from './componants/login/login.component';
import { IndexComponent } from './componants/projets/index/index.component';
import { ShowComponent } from './componants/projets/show/show.component';
import { RegisterComponent } from './componants/register/register.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"home",component:HomeComponent},
  { path : "register", component : RegisterComponent},
  { path : "login", component : LoginComponent},
  {path:"project/index", component:IndexComponent},
  {path:"project/show", component:ShowComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
