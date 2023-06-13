import { EditarEmpresaComponent } from "./../editar-empresa/editar-empresa.component";
import { Router } from "@angular/router";
import { EmpresaService } from "./../empresa.service";
import { NovaEmpresaComponent } from "./../nova-empresa/nova-empresa.component";

import { Component, OnInit } from "@angular/core";
import { Empresa } from "../empresa";

import { ModalController } from "@ionic/angular";
//import { UsuarioService } from "src/app/autenticacao/usuario/usuario.service";

@Component({
  selector: "app-lista-empresas",
  templateUrl: "./lista-empresas.component.html",
  styleUrls: ["./lista-empresas.component.scss", "../../modal.scss"],
})
export class ListaEmpresasComponent implements OnInit {
  listaEmpresa: Empresa[] = [];

  constructor(
    private service: EmpresaService,
    private modalController: ModalController,
    private router: Router,
    //private ser:UsuarioService
  ) {}

  ngOnInit(): void {
    this.service.listar().subscribe((event) => {
      this.listaEmpresa = event.result as Empresa[];
      console.log(this.listaEmpresa);
    });
  }
  async add() {
    const modal = await this.modalController.create({
      component: NovaEmpresaComponent,
      cssClass: "modal",
    });
    await modal.present();
  }
  async edit(empresa: any, empresas: any) {
    console.log(empresa, empresas);
    const modal = await this.modalController.create({
      component: EditarEmpresaComponent,
      componentProps: { empresa, empresas },
      cssClass: "modal",
    });
    await modal.present();
  }

  delet(empresa: any) {
    this.service.delet(empresa).subscribe(
      () => {
        this.router.navigate(["/empresas"]);
      },
      (error) => console.log(error)
    );
  }
  logout(){
//this.ser.logout()
  }
}
