import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



//======= IMPORTS DO PORTAL ==============
import { LoginComponent } from './Portal/login/login.component';
import { RegisterComponent } from './Portal/register/register.component';
import { HomeComponent } from './Portal/home/home.component';
import { TypeRegisterComponent } from './Portal/type-register/type-register.component';
import { UsersComponent } from './Portal/users/users.component';
import { UsersPendingComponent } from './Portal/users-pending/users-pending.component';
import { NewAdmComponent } from './Portal/new-adm/new-adm.component';



//======= IMPORTS DE ESPAÇOS ==============
import { SolicitarComponent } from './Espaços/Solicitantes/solicitar/solicitar.component';
import { VisualizarComponent } from './Espaços/Solicitantes/visualizar/visualizar.component';
import { SolicitacoesComponent } from './Espaços/Adiministrador/solicitacoes/solicitacoes.component';
import { SolicitacoesConfirmadasComponent } from './Espaços/Adiministrador/solicitacoes-confirmadas/solicitacoes-confirmadas.component';
import { EspacosComponent } from './Espaços/Adiministrador/espacos/espacos.component';
import { EspacosNovoComponent } from './Espaços/Adiministrador/espacos-novo/espacos-novo.component';




// ====== IMPORTS DE EVENTOS ===================

import { CadEventosComponent } from './Eventos/cad-eventos/cad-eventos.component';
import { HomeEventosComponent } from './Eventos/home-eventos/home-eventos.component';
import { AlterarEventoComponent } from './Eventos/alterar-evento/alterar-evento.component';




// ====== IMPORTS DE EVENTOS ===================

import { ListaEventosComponent } from './Presenca/eventos/lista-eventos/lista-eventos.component';
import { ListaPessoasComponent } from './Presenca/pessoas/lista-pessoas/lista-pessoas.component';
import { ListaEmpresasComponent } from './Presenca/empresas/lista-empresas/lista-empresas.component';
import { ListaConvidadosComponent } from './Presenca/convidados/lista-convidados/lista-convidados.component';
import { NovoEventoComponent } from './Presenca/eventos/novo-evento/novo-evento.component';
import { UserGuardGuard } from './guard/user-guard.guard';




const routes: Routes = [
  // -----ROTAS DO PORTAL --------
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'type-register', component: TypeRegisterComponent },
  { path: 'home', component: HomeComponent, canActivate: [UserGuardGuard], 
  data: { 
    expectedRole: ['Administrador', 'Solicitante']
  } },
  { path: 'users', component: UsersComponent},
  { path: 'users-pending', component: UsersPendingComponent},
  { path: 'register-adm', component: NewAdmComponent},



  // -----ROTAS DO EVENTOS --------

  {path: 'eventos',component: HomeEventosComponent},
  {path: 'cad-eventos', component: CadEventosComponent},

  // ROTAS DO SISTEMA DE ESPAÇOS
  { path: 'solicitar', component: SolicitarComponent},
  { path: 'visualizar', component: VisualizarComponent},
  { path: 'solicitacoes', component: SolicitacoesComponent},
  { path: 'espacos', component: EspacosComponent  },
  { path: 'espacos-novo', component: EspacosNovoComponent},
  { path: 'solicitacoes-confirmadas', component: SolicitacoesConfirmadasComponent},
  { path: 'alterar-evento/:id', component: AlterarEventoComponent},


  // ROTAS DO SISTEMA DE PRESENÇA
  {path: 'lista-eventos', component: ListaEventosComponent},
  {path: 'lista-pessoas', component: ListaPessoasComponent},
  {path: 'lista-empresas', component: ListaEmpresasComponent},
  {path: 'lista-convidados', component: ListaConvidadosComponent},
  {path: 'novo-evento', component: NovoEventoComponent},
  
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 


}
