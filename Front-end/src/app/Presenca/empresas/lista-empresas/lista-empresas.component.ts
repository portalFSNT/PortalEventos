import { EditarEmpresaComponent } from "./../editar-empresa/editar-empresa.component";
import { Router } from "@angular/router";
import { EmpresaService } from "./../empresa.service";
import { NovaEmpresaComponent } from "./../nova-empresa/nova-empresa.component";

import { Component, OnInit } from "@angular/core";
import { Empresa } from "../empresa";

import { ModalController,} from "@ionic/angular";
import { BsModalRef, BsModalService, ModalOptions } from "ngx-bootstrap/modal";

@Component({
  selector: "app-lista-empresas",
  templateUrl: "./lista-empresas.component.html",
  styleUrls: ["./lista-empresas.component.scss"],
})
export class ListaEmpresasComponent implements OnInit {
  listaEmpresa: Empresa[] = [];

  constructor(
    private service: EmpresaService,
    private modalController: ModalController,
    private router: Router,
    private modalService: BsModalService
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

  // async edit(empresa: string, empresas: string) {
  //   console.log(empresa, empresas);
  //   const modal = await this.modalController.create({
  //     component: EditarEmpresaComponent,
  //     componentProps: { empresa, empresas },
  //     cssClass: "modal",
  //   });
  //   console.log("modal")
  //   await modal.present();
  // }

  delet(id: number) {
    this.service.delet(id).subscribe(
      () => {
        this.router.navigate(["/empresas"]);
      },
      (error) => console.log(error)
    );
    window.location.reload();
  }
  
bsModalRef?: BsModalRef;
novoEmpresa(){
  this.bsModalRef = this.modalService.show(NovaEmpresaComponent);
  this.bsModalRef.content.closeBtnName = 'Close';
}

editarEmpresa(id: number){
  const id_empresa = id;
  const initialState: ModalOptions = {
    initialState:{
      list: [
        id_empresa,
      ],
      title: 'Modal Update Empresa'
    }
  };

  this.bsModalRef = this.modalService.show(EditarEmpresaComponent, initialState);
  this.bsModalRef.content.closeBtnName = 'Close';
  return id;
}
}
