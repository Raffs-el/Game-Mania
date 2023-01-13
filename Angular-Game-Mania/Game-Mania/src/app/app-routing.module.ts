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
import { Notebooks1Component } from './produtos/notebooks/notebooks1/notebooks1.component';
import { Notebooks2Component } from './produtos/notebooks/notebooks2/notebooks2.component';
import { Notebooks3Component } from './produtos/notebooks/notebooks3/notebooks3.component';
import { Notebooks4Component } from './produtos/notebooks/notebooks4/notebooks4.component';
import { Notebooks5Component } from './produtos/notebooks/notebooks5/notebooks5.component';
import { Notebooks6Component } from './produtos/notebooks/notebooks6/notebooks6.component';
import { Notebooks7Component } from './produtos/notebooks/notebooks7/notebooks7.component';
import { Notebooks8Component } from './produtos/notebooks/notebooks8/notebooks8.component';
import { Notebooks9Component } from './produtos/notebooks/notebooks9/notebooks9.component';
import { Tablet1Component } from './produtos/tablets/tablet1/tablet1.component';
import { Tablet2Component } from './produtos/tablets/tablet2/tablet2.component';
import { Tablet3Component } from './produtos/tablets/tablet3/tablet3.component';
import { Tablet4Component } from './produtos/tablets/tablet4/tablet4.component';
import { Tablet5Component } from './produtos/tablets/tablet5/tablet5.component';
import { Tablet6Component } from './produtos/tablets/tablet6/tablet6.component';
import { Tablet7Component } from './produtos/tablets/tablet7/tablet7.component';
import { Tablet8Component } from './produtos/tablets/tablet8/tablet8.component';
import { Tablet9Component } from './produtos/tablets/tablet9/tablet9.component';
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
  { path: "notebook1", component: Notebooks1Component},
  { path: "notebook2", component: Notebooks2Component},
  { path: "notebook3", component: Notebooks3Component},
  { path: "notebook4", component: Notebooks4Component},
  { path: "notebook5", component: Notebooks5Component},
  { path: "notebook6", component: Notebooks6Component},
  { path: "notebook7", component: Notebooks7Component},
  { path: "notebook8", component: Notebooks8Component},
  { path: "notebook9", component: Notebooks9Component},
  { path: "tablet1", component: Tablet1Component},
  { path: "tablet2", component: Tablet2Component},
  { path: "tablet3", component: Tablet3Component},
  { path: "tablet4", component: Tablet4Component},
  { path: "tablet5", component: Tablet5Component},
  { path: "tablet6", component: Tablet6Component},
  { path: "tablet7", component: Tablet7Component},
  { path: "tablet8", component: Tablet8Component},
  { path: "tablet9", component: Tablet9Component},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
