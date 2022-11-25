import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [ 
  // {path:"users",component:HomeComponent},
  { path : '*', pathMatch : "full", redirectTo : 'HomeComponent'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
