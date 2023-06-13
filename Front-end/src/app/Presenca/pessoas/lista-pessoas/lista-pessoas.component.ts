import { PessoaService } from './../pessoa.service';
import { EditarPessoaComponent } from './../editar-pessoa/editar-pessoa.component';
import { NovaPessoaComponent } from './../nova-pessoa/nova-pessoa.component';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

import { Pessoa } from "../pessoa";
import { Component, OnInit } from "@angular/core";
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: "app-lista-pessoas",
  templateUrl: "./lista-pessoas.component.html",
  styleUrls: ["./lista-pessoas.component.scss","../../navbar-adm.scss"],
})
export class ListaPessoasComponent implements OnInit {
  listaPessoa: Pessoa[] = [];
  constructor(
    private service: PessoaService,
    private modalController:ModalController,
    private router:Router,
    private modalService: BsModalService) {}
   

  ngOnInit(): void {
    this.service.listar().subscribe((event) => {
      this.listaPessoa = event.result as Pessoa[];
      console.log(this.listaPessoa);
    });
  }

  async add() {
    const modal = await this.modalController.create({
      component:NovaPessoaComponent,
      cssClass:"modal",
    });
    await modal.present();
  }

  async edit(
   
    nome:any,
    cargo:any,
    empresa:any,
    email:any,
    telefone:any
    ){
 
      const modal=await this.modalController.create({
        component:EditarPessoaComponent,
        componentProps:{
       
          nome,
          cargo,
          empresa,
          email,
          telefone
        },
        cssClass:"modal",
      });
      await modal.present();
    }
  delet(nome:any){
    this.service.delet(nome).subscribe(
      ()=>{
        this.router.navigate(["/convidados"]);
      },
      (error) =>console.log(error)
    );

  }

  bsModalRef?: BsModalRef;
  novoPessoa(){
    this.bsModalRef = this.modalService.show(NovaPessoaComponent);
    this.bsModalRef.content.closeBtnName = 'Close';
  }

}
