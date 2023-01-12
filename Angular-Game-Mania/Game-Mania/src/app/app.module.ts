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
import { PromocoesComponent } from './views/promocoes/promocoes.component';
import { NotebooksComponent } from './views/notebooks/notebooks.component';
import { TabletsComponent } from './views/tablets/tablets.component';
import { PerfilComponent } from './views/perfil/perfil.component';
import { CelularesComponent } from './views/celulares/celulares.component';
import { VideogamesComponent } from './views/videogames/videogames.component';
import { AcessoriosComponent } from './views/acessorios/acessorios.component';
import {MatButtonModule} from '@angular/material/button';
import { Computadores3Component } from './views/computadores/computadores3/computadores3.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSliderModule} from '@angular/material/slider';
import {MatSidenavModule} from '@angular/material/sidenav';
import { Computador1Component } from './produtos/computadores/computador1/computador1.component';
import { Computador2Component } from './produtos/computadores/computador2/computador2.component';
import { Computador3Component } from './produtos/computadores/computador3/computador3.component';
import { Computador4Component } from './produtos/computadores/computador4/computador4.component';
import { Computador5Component } from './produtos/computadores/computador5/computador5.component';
import { Computador6Component } from './produtos/computadores/computador6/computador6.component';
import { Computador7Component } from './produtos/computadores/computador7/computador7.component';
import { Computador8Component } from './produtos/computadores/computador8/computador8.component';
import { Computador9Component } from './produtos/computadores/computador9/computador9.component';
import { Notebooks1Component } from './produtos/notebooks/notebooks1/notebooks1.component';
import { Notebooks2Component } from './produtos/notebooks/notebooks2/notebooks2.component';
import { Notebooks3Component } from './produtos/notebooks/notebooks3/notebooks3.component';
import { Notebooks4Component } from './produtos/notebooks/notebooks4/notebooks4.component';
import { Notebooks5Component } from './produtos/notebooks/notebooks5/notebooks5.component';
import { Notebooks6Component } from './produtos/notebooks/notebooks6/notebooks6.component';
import { Notebooks7Component } from './produtos/notebooks/notebooks7/notebooks7.component';
import { Notebooks8Component } from './produtos/notebooks/notebooks8/notebooks8.component';
import { Notebooks9Component } from './produtos/notebooks/notebooks9/notebooks9.component';








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
    AcessoriosComponent,
    Computador1Component,
    Computador2Component,
    Computador3Component,
    Computador4Component,
    Computador5Component,
    Computador6Component,
    Computador7Component,
    Computador8Component,
    Computador9Component,
    Notebooks1Component,
    Notebooks2Component,
    Notebooks3Component,
    Notebooks4Component,
    Notebooks5Component,
    Notebooks6Component,
    Notebooks7Component,
    Notebooks8Component,
    Notebooks9Component,
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
    MatButtonModule,
    MatExpansionModule,
    MatPaginatorModule,
    MatSliderModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
