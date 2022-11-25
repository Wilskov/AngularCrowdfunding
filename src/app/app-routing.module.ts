import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';


const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [],
    children: [
      {
        path: 'users',
        component: UsersComponent,
        canActivate: [],
      },
      // <-- place here others admin/private routes
    ],    
  },
  {
    path: '',
    component: AppComponent,
    children: [
      // {
      //   path: 'products',
      //   loadChildren: () => import('./products/products.module').then((m) => m.ProductsModule),
      // },  
      // <-- place here others lazy loaded site/public routes
    ],        
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
