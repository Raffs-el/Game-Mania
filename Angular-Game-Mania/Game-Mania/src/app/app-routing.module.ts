import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriasComponent } from './views/categorias/categorias.component';
import { ComputadoresComponent } from './views/computadores/computadores.component';
import { Computadores2Component } from './views/computadores/computadores2/computadores2.component';
import { Computadores3Component } from './views/computadores/computadores3/computadores3.component';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { NotebooksComponent } from './views/notebooks/notebooks.component';
import { Notebooks2Component } from './views/notebooks/notebooks2/notebooks2.component';
import { Notebooks3Component } from './views/notebooks/notebooks3/notebooks3.component';
import { PerfilComponent } from './views/perfil/perfil.component';
import { PromocoesComponent } from './views/promocoes/promocoes.component';
import { TabletsComponent } from './views/tablets/tablets.component';
import { Tablets2Component } from './views/tablets/tablets2/tablets2.component';


const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "login", component: LoginComponent},
  { path: "categorias", component: CategoriasComponent},
  { path: "computadores", component: ComputadoresComponent},
  { path: "computadores2", component: Computadores2Component},
  { path: "computadores3", component: Computadores3Component},
  { path: "promocoes", component: PromocoesComponent},
  { path: "notebooks", component: NotebooksComponent},
  { path: "notebooks2", component: Notebooks2Component},
  { path: "notebooks3", component: Notebooks3Component},
  { path: "tablets", component: TabletsComponent},
  { path: "tablets2", component: Tablets2Component},
  { path: "perfil", component: PerfilComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
