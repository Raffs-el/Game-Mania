import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcessoriosComponent } from './views/acessorios/acessorios.component';
import { CelularesComponent } from './views/celulares/celulares.component';
import { ComputadoresComponent } from './views/computadores/computadores.component';
import { Computadores3Component } from './views/computadores/computadores3/computadores3.component';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { NotebooksComponent } from './views/notebooks/notebooks.component';
import { PerfilComponent } from './views/perfil/perfil.component';
import { PromocoesComponent } from './views/promocoes/promocoes.component';
import { TabletsComponent } from './views/tablets/tablets.component';
import { VideogamesComponent } from './views/videogames/videogames.component';


const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "login", component: LoginComponent},
  { path: "computadores", component: ComputadoresComponent},
  { path: "computadores3", component: Computadores3Component},
  { path: "promocoes", component: PromocoesComponent},
  { path: "notebooks", component: NotebooksComponent},
  { path: "tablets", component: TabletsComponent},
  { path: "perfil", component: PerfilComponent},
  { path: "celulares", component: CelularesComponent},
  { path: "videogames", component: VideogamesComponent},
  { path: "acessorios", component: AcessoriosComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
