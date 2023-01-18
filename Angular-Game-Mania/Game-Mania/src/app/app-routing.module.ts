import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Acessorio1Component } from './produtos/acessorios/acessorio1/acessorio1.component';
import { Acessorio2Component } from './produtos/acessorios/acessorio2/acessorio2.component';
import { Acessorio3Component } from './produtos/acessorios/acessorio3/acessorio3.component';
import { Acessorio4Component } from './produtos/acessorios/acessorio4/acessorio4.component';
import { Acessorio5Component } from './produtos/acessorios/acessorio5/acessorio5.component';
import { Acessorio6Component } from './produtos/acessorios/acessorio6/acessorio6.component';
import { Acessorio7Component } from './produtos/acessorios/acessorio7/acessorio7.component';
import { Acessorio8Component } from './produtos/acessorios/acessorio8/acessorio8.component';
import { Acessorio9Component } from './produtos/acessorios/acessorio9/acessorio9.component';
import { Celular1Component } from './produtos/celulares/celular1/celular1.component';
import { Celular2Component } from './produtos/celulares/celular2/celular2.component';
import { Celular3Component } from './produtos/celulares/celular3/celular3.component';
import { Celular4Component } from './produtos/celulares/celular4/celular4.component';
import { Celular5Component } from './produtos/celulares/celular5/celular5.component';
import { Celular6Component } from './produtos/celulares/celular6/celular6.component';
import { Celular7Component } from './produtos/celulares/celular7/celular7.component';
import { Celular8Component } from './produtos/celulares/celular8/celular8.component';
import { Celular9Component } from './produtos/celulares/celular9/celular9.component';
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
import { Videogame1Component } from './produtos/videogames/videogame1/videogame1.component';
import { Videogame2Component } from './produtos/videogames/videogame2/videogame2.component';
import { Videogame3Component } from './produtos/videogames/videogame3/videogame3.component';
import { Videogame4Component } from './produtos/videogames/videogame4/videogame4.component';
import { Videogame5Component } from './produtos/videogames/videogame5/videogame5.component';
import { Videogame6Component } from './produtos/videogames/videogame6/videogame6.component';
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
  { path: "celular1", component: Celular1Component},
  { path: "celular2", component: Celular2Component},
  { path: "celular3", component: Celular3Component},
  { path: "celular4", component: Celular4Component},
  { path: "celular5", component: Celular5Component},
  { path: "celular6", component: Celular6Component},
  { path: "celular7", component: Celular7Component},
  { path: "celular8", component: Celular8Component},
  { path: "celular9", component: Celular9Component},
  { path: "videogame1", component: Videogame1Component},
  { path: "videogame2", component: Videogame2Component},
  { path: "videogame3", component: Videogame3Component},
  { path: "videogame4", component: Videogame4Component},
  { path: "videogame5", component: Videogame5Component},
  { path: "videogame6", component: Videogame6Component},
  { path: "acessorio1", component: Acessorio1Component},
  { path: "acessorio2", component: Acessorio2Component},
  { path: "acessorio3", component: Acessorio3Component},
  { path: "acessorio4", component: Acessorio4Component},
  { path: "acessorio5", component: Acessorio5Component},
  { path: "acessorio6", component: Acessorio6Component},
  { path: "acessorio7", component: Acessorio7Component},
  { path: "acessorio8", component: Acessorio8Component},
  { path: "acessorio9", component: Acessorio9Component},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
