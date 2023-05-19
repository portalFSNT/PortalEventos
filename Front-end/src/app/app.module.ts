import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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


// =========== imports de espaços ==============
import { SolicitarComponent } from './Espaços/Solicitantes/solicitar/solicitar.component';
import { VisualizarComponent } from './Espaços/Solicitantes/visualizar/visualizar.component';
import { Modal1Component } from './Espaços/Solicitantes/modal1/modal1.component';
import { IonicModule } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { HeaderSolicitanteComponent } from './Portal/header-solicitante/header-solicitante.component';
import { ModalAceitarComponent } from './Espaços/Adiministrador/modal-aceitar/modal-aceitar.component';
import { SolicitacoesComponent } from './Espaços/Adiministrador/solicitacoes/solicitacoes.component';
import { SolicitacoesConfirmadasComponent } from './Espaços/Adiministrador/solicitacoes-confirmadas/solicitacoes-confirmadas.component';


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

    // ====DECLARAÇÃOD DE ESPAÇOS ======
    SolicitarComponent,
    VisualizarComponent,
    Modal1Component,
    HeaderSolicitanteComponent,
    ModalAceitarComponent,
    SolicitacoesComponent,
    SolicitacoesConfirmadasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModalModule.forRoot(),

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
