import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminPanelRoutingModule } from './admin-panel-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { AdminRoutingModule } from '../admin-routing.module';
import { AdminComponent } from './admin/admin.component';

@NgModule({
  declarations: [
    NavbarComponent,
    AdminComponent,
    
  ],
  imports: [
    CommonModule,
    AdminPanelRoutingModule,
    AdminRoutingModule
  ], 
  exports: [
    
  ],
  bootstrap : [AdminComponent]

})
export class AdminPanelModule { }
