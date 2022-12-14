import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './views/header/header.component';
import { FooterComponent } from './views/footer/footer.component';
import { HomeComponent } from './views/home/home.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import { LoginComponent } from './views/login/login.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CategoriasComponent } from './views/categorias/categorias.component';
import { ComputadoresComponent } from './views/computadores/computadores.component';
import { Computadores3Component } from './views/computadores/computadores3/computadores3.component';
import { PromocoesComponent } from './views/promocoes/promocoes.component';
import { NotebooksComponent } from './views/notebooks/notebooks.component';
import { Notebooks2Component } from './views/notebooks/notebooks2/notebooks2.component';
import { Notebooks3Component } from './views/notebooks/notebooks3/notebooks3.component';
import { TabletsComponent } from './views/tablets/tablets.component';
import { Tablets2Component } from './views/tablets/tablets2/tablets2.component';
import { PerfilComponent } from './views/perfil/perfil.component';
import { CelularesComponent } from './views/celulares/celulares.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    CategoriasComponent,
    ComputadoresComponent,
    Computadores3Component,
    PromocoesComponent,
    NotebooksComponent,
    Notebooks2Component,
    Notebooks3Component,
    TabletsComponent,
    Tablets2Component,
    PerfilComponent,
    CelularesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatIconModule,
    MatCheckboxModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
