import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';



import { HeaderComponent } from './Portal/header/header.component';
import { HomeComponent } from './Portal/home/home.component';
import { RegisterComponent } from './Portal/register/register.component';
import { LoginComponent } from './Portal/login/login.component';
import { FuncionsEventosComponent } from './Portal/header/funcions-eventos/funcions-eventos.component';
import { FuncionsConvidadosComponent } from './Portal/header/funcions-convidados/funcions-convidados.component';
import { FuncionsEspacosComponent } from './Portal/header/funcions-espacos/funcions-espacos.component';
import { TypeRegisterComponent } from './Portal/type-register/type-register.component';
import { UsersComponent } from './Portal/users/users.component';
import { ModalChangeDataUserComponent } from './Portal/modal-change-data-user/modal-change-data-user.component';
import { CardComponent } from './Eventos/card/card.component';
import { CadEventosComponent } from './Eventos/cad-eventos/cad-eventos.component';
import { HomeEventosComponent } from './Eventos/home-eventos/home-eventos.component';



// =========== imports de espaços ==============
import { SolicitarComponent } from './Espaços/Solicitantes/solicitar/solicitar.component';
import { VisualizarComponent } from './Espaços/Solicitantes/visualizar/visualizar.component';
import { Modal1Component } from './Espaços/Solicitantes/modal1/modal1.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { HeaderSolicitanteComponent } from './Portal/header-solicitante/header-solicitante.component';
import { ModalAceitarComponent } from './Espaços/Adiministrador/modal-aceitar/modal-aceitar.component';
import { SolicitacoesComponent } from './Espaços/Adiministrador/solicitacoes/solicitacoes.component';
import { SolicitacoesConfirmadasComponent } from './Espaços/Adiministrador/solicitacoes-confirmadas/solicitacoes-confirmadas.component';
import { EspacosComponent } from './Espaços/Adiministrador/espacos/espacos.component';
import { ModalDeletarEspacoComponent } from './Espaços/Adiministrador/modal-deletar-espaco/modal-deletar-espaco.component';
import { EspacosNovoComponent } from './Espaços/Adiministrador/espacos-novo/espacos-novo.component';
import { Modal4Component } from './Espaços/Adiministrador/modal4/modal4.component';
import { UsersPendingComponent } from './Portal/users-pending/users-pending.component';
import { ModalAcceptDenyUserComponent } from './Portal/modal-accept-deny-user/modal-accept-deny-user.component';
import { NewAdmComponent } from './Portal/new-adm/new-adm.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    FuncionsEventosComponent,
    FuncionsConvidadosComponent,
    FuncionsEspacosComponent,
    TypeRegisterComponent,
    UsersComponent,
    ModalChangeDataUserComponent,

    CadEventosComponent,
    CardComponent,
    HomeEventosComponent,



    // ====DECLARAÇÃOD DE ESPAÇOS ======
    SolicitarComponent,
    VisualizarComponent,
    Modal1Component,
    HeaderSolicitanteComponent,
    ModalAceitarComponent,
    SolicitacoesComponent,
    SolicitacoesConfirmadasComponent,
    EspacosComponent,
    ModalDeletarEspacoComponent,
    EspacosNovoComponent,
    Modal4Component,
    UsersPendingComponent,
    ModalAcceptDenyUserComponent,
    NewAdmComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModalModule.forRoot(),

    IonicModule.forRoot(),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,


    // ====DECLARAÇÃOD DE ESPAÇOS ======
    IonicModule.forRoot(),
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
