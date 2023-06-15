import { TestBed } from '@angular/core/testing';
import { PessoaService } from './../pessoa.service';
import { EditarPessoaComponent } from './../editar-pessoa/editar-pessoa.component';
import { NovaPessoaComponent } from './../nova-pessoa/nova-pessoa.component';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

import { Pessoa } from "../pessoa";
import { Component, Input,OnInit } from "@angular/core";
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';

@Component({
  selector: "app-lista-pessoas",
  templateUrl: "./lista-pessoas.component.html",
  styleUrls: ["./lista-pessoas.component.scss","../../navbar-adm.scss"],
})
export class ListaPessoasComponent implements OnInit {
  
  @Input() pessoa: any;

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

  // async edit(pessoa: any){
  //   const id = pessoa.id;
  //   const nome = pessoa.nome;
  //   const email = pessoa.email;
  //   const cargo = pessoa.cargo;
  //   const empresa = pessoa.empresa;
  //   const id_empresa = pessoa.id_empresa

  //   const modal=await this.modalController.create({
  //       component:EditarPessoaComponent,
  //       componentProps:{
  //         id,
  //         nome,
  //         email,
  //         cargo,
  //         empresa,
  //         id_empresa,
  //       },
  //       cssClass:"modal",
  //     });
  //     await modal.present();
  //   }
  
  updatePessoa(pessoa: any){
    console.log(pessoa.id)
    const id = pessoa.id;
    const nome = pessoa.nome;
    const email = pessoa.email;
    const cargo = pessoa.cargo;
    const telefone = pessoa.telefone;
    const empresa = pessoa.empresa;
    const id_empresa = pessoa.id_empresa

    const initialState: ModalOptions = {
      initialState: {
        list: [
          id,
          nome,
          email,
          cargo,
          telefone,
          empresa,
          id_empresa,
        ],
        title: 'Modal update pessoa',
        cssClass:"modal",
      }
    };
    this.bsModalRef = this.modalService.show(EditarPessoaComponent, initialState);
    this.bsModalRef.content.closeBtnName ='Close';
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
