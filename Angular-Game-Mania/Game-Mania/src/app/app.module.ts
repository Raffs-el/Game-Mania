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
import { ComputadoresComponent } from './views/computadores/computadores.component';
import { Computadores3Component } from './views/computadores/computadores3/computadores3.component';
import { PromocoesComponent } from './views/promocoes/promocoes.component';
import { NotebooksComponent } from './views/notebooks/notebooks.component';
import { TabletsComponent } from './views/tablets/tablets.component';
import { PerfilComponent } from './views/perfil/perfil.component';
import { CelularesComponent } from './views/celulares/celulares.component';
import { VideogamesComponent } from './views/videogames/videogames.component';
import { AcessoriosComponent } from './views/acessorios/acessorios.component';
import {MatButtonModule} from '@angular/material/button';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    ComputadoresComponent,
    Computadores3Component,
    PromocoesComponent,
    NotebooksComponent,
    TabletsComponent,
    PerfilComponent,
    CelularesComponent,
    VideogamesComponent,
    AcessoriosComponent
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
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
