import { ListaUsuarioComponent } from './lista-usuario/lista-usuario.component';

import { NovoUsuarioComponent } from './novo-usuario/novo-usuario.component';

import { HomeComponent } from './home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login/login.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
    children:[
      {
        path:'',
        component:LoginComponent
      },
      {
        path:"novousuario",
        component:NovoUsuarioComponent
      },
      {
        path:'listausuario',
        component:ListaUsuarioComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
