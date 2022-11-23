import { CreatePalierFormComponent } from './componants/projets/create-projet-form/create-palier-form/create-palier-form.component';
import { CreateProjetFormComponent } from './componants/projets/create-projet-form/create-projet-form.component';
import { RegisterComponent } from './componants/register/register.component';
import { ShowComponent } from './componants/projets/show/show.component';
import { NavbarComponent } from './componants/navbar/navbar.component';
import { FooterComponent } from './componants/footer/footer.component';
import { LoginComponent } from './componants/login/login.component';
import { HomeComponent } from './componants/home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { IndexComponent } from './componants/projets/index/index.component';

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
    ShowComponent,
    IndexComponent

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



























