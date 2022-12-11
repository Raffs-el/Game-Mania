import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriasComponent } from './views/categorias/categorias.component';
import { ComputadoresComponent } from './views/computadores/computadores.component';
import { Computadores2Component } from './views/computadores/computadores2/computadores2.component';
import { Computadores3Component } from './views/computadores/computadores3/computadores3.component';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { PromocoesComponent } from './views/promocoes/promocoes.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "login", component: LoginComponent},
  { path: "categorias", component: CategoriasComponent},
  { path: "computadores", component: ComputadoresComponent},
  { path: "computadores2", component: Computadores2Component},
  { path: "computadores3", component: Computadores3Component},
  { path: "promocoes", component: PromocoesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
