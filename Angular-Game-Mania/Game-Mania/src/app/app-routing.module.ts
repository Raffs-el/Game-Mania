import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Computador1Component } from './produtos/computadores/computador1/computador1.component';
import { Computador2Component } from './produtos/computadores/computador2/computador2.component';
import { Computador3Component } from './produtos/computadores/computador3/computador3.component';
import { Computador4Component } from './produtos/computadores/computador4/computador4.component';
import { Computador5Component } from './produtos/computadores/computador5/computador5.component';
import { Computador6Component } from './produtos/computadores/computador6/computador6.component';
import { Computador7Component } from './produtos/computadores/computador7/computador7.component';
import { Computador8Component } from './produtos/computadores/computador8/computador8.component';
import { Computador9Component } from './produtos/computadores/computador9/computador9.component';
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
  { path: "acessorios", component: AcessoriosComponent},
  { path: "computador1", component:Computador1Component},
  { path: "computador2", component:Computador2Component},
  { path: "computador3", component:Computador3Component},
  { path: "computador4", component: Computador4Component},
  { path: "computador5", component: Computador5Component},
  { path: "computador6", component: Computador6Component},
  { path: "computador7", component: Computador7Component},
  { path: "computador8", component: Computador8Component},
  { path: "computador9", component: Computador9Component},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
