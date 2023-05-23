import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//======= IMPORTS DO PORTAL ==============
import { LoginComponent } from './Portal/login/login.component';
import { RegisterComponent } from './Portal/register/register.component';
import { HomeComponent } from './Portal/home/home.component';
import { TypeRegisterComponent } from './Portal/type-register/type-register.component';
import { UsersComponent } from './Portal/users/users.component';
import { ModalChangeDataUserComponent } from './Portal/modal-change-data-user/modal-change-data-user.component';

// ====== IMPORTS DE EVENTOS ===================

import { CadEventosComponent } from './Eventos/cad-eventos/cad-eventos.component';
import { HomeEventosComponent } from './Eventos/home-eventos/home-eventos.component';



const routes: Routes = [
  // -----ROTAS DO PORTAL --------
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'type-register', component: TypeRegisterComponent },
  { path: 'home', component: HomeComponent},
  { path: 'users', component: UsersComponent},
  { path: 'modal', component: ModalChangeDataUserComponent},
  
  


  // -----ROTAS DO EVENTOS --------

  {path: 'Eventos',component: HomeEventosComponent},
  {path: 'login',component: LoginComponent},
  {path: 'cad-eventos', component: CadEventosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 


}
