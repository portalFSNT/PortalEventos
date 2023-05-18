import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//======= IMPORTS DO PORTAL ==============
import { LoginComponent } from './Portal/login/login.component';
import { RegisterComponent } from './Portal/register/register.component';
import { HomeComponent } from './Portal/home/home.component';
import { TypeRegisterComponent } from './Portal/type-register/type-register.component';
import { UsersComponent } from './Portal/users/users.component';


//======= IMPORTS DE ESPAÇOS ==============
import { SolicitarComponent } from './Espaços/Solicitantes/solicitar/solicitar.component';
import { VisualizarComponent } from './Espaços/Solicitantes/visualizar/visualizar.component';
import { SolicitacoesComponent } from './Espaços/Adiministrador/solicitacoes/solicitacoes.component';

// ====== IMPORTS DE EVENTOS ===================

const routes: Routes = [
  // -----ROTAS DO RORTAL --------
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'type-register', component: TypeRegisterComponent },
  { path: 'home', component: HomeComponent},
  { path: 'users', component: UsersComponent},


  // ROTAS DO SISTEMA DE ESPAÇOS
  { path: 'solicitar', component: SolicitarComponent},
  { path: 'visualizar', component: VisualizarComponent},
  { path: 'solicitacoes', component: SolicitacoesComponent}
  // { path: 'solicitacoes', component: SolicitacoesComponent},
  // { path: 'solicitantes', component: SolicitantesComponent},
  // { path: 'solicitante-novo', component: SolicitanteNovoComponent},
  // { path: 'perfis', component: PerfisComponent},
  // { path: 'perfis-novo', component: PerfisNovoComponent},
  // { path: 'espacos', component: EspacosComponent  },
  // { path: 'espacos-novo', component: EspacosNovoComponent},
  // { path: 'solicitacoes-confirmadas', component: SolicitacoesConfirmadasComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 


}
