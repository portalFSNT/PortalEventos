import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ModalModule } from 'ngx-bootstrap/modal';


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
import { CardComponent } from './Eventos/card/card.component';
import { CadEventosComponent } from './Eventos/cad-eventos/cad-eventos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';
import { HomeEventosComponent } from './Eventos/home-eventos/home-eventos.component';


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
    HomeEventosComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModalModule.forRoot(),
    IonicModule.forRoot(),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
