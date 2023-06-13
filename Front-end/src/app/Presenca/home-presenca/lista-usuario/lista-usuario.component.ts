import { EditarUsuarioComponent } from './../editar-usuario/editar-usuario.component';
import { UsuariosService } from "../usuarios.service";
import { Router } from "@angular/router";
import { NovoUsuarioComponent } from "./../novo-usuario/novo-usuario.component";

import { ModalController } from "@ionic/angular";

import { Component, OnInit } from "@angular/core";
import { Usuario } from "./../usuario";

@Component({
  selector: "app-lista-usuario",
  templateUrl: "./lista-usuario.component.html",
  styleUrls: ["./lista-usuario.component.scss", "../../modal.scss"]
})
export class ListaUsuarioComponent implements OnInit {
  listaUsuario: Usuario[] = [];

  constructor(
    private service: UsuariosService,
    private modalController: ModalController,
    private router: Router,
    //private ser:UsuarioService
  ) {}

  ngOnInit(): void {
    this.service.listar().subscribe((event) => {
      this.listaUsuario = event.result as Usuario[];
      console.log(this.listaUsuario);
    });
  }

  
  async add() {
    const modal = await this.modalController.create({
      component: NovoUsuarioComponent,
      cssClass: "modal",
      // initialBreakpoint:1,
      // breakpoints:[0,0.4,5,1]
    });

    await modal.present();
  }

  async edit(
    id_login:any,
    login:any,
    perfil:any,
    email:any,
  
    telefone:any,
  

  ){
    const modal= await this.modalController.create({
      component:EditarUsuarioComponent,
      componentProps:{
        id_login,
        login,
        perfil,
        email,     
        telefone,
        
      },
      cssClass:"modal"
    });
    await modal.present();
  }


  delet(id_login: any) {
    console.log(id_login);
    this.service.delet(id_login).subscribe(
      () => {
        this.router.navigate(["/home/listausuario"]);
      },
      (error) => console.log(error)
    );
  }
  logout(){
//this.ser.logout()
  }


}
