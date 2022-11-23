import { CreatePalierFormComponent } from './componants/create-projet-form/create-palier-form/create-palier-form.component';
import { CreateProjetFormComponent } from './componants/create-projet-form/create-projet-form.component';
import { RegisterComponent } from './componants/register/register.component';
import { NavbarComponent } from './componants/navbar/navbar.component';
import { FooterComponent } from './componants/footer/footer.component';
import { AdminComponent } from './admin-panel/admin/admin.component';
import { LoginComponent } from './componants/login/login.component';
import { HomeComponent } from './componants/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    CreateProjetFormComponent,
    CreatePalierFormComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    // AdminComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



























