//ANGULAR -----
import { Component, Input, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
//MODALS -----
import { ModalOptions } from 'ngx-bootstrap/modal';
import { ModalController } from "@ionic/angular";
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
//SERVICE -----
import { ConvidadoService } from "./../convidado.service";
import { EventoService } from './../../eventos/evento.service';
//COMPONENT -----
import { EditarConvidadoComponent } from './../editar-convidado/editar-convidado.component';
import { NovoConvidadoComponent } from "./../novo-convidado/novo-convidado.component";
import { EditarEventoComponent } from "./../../eventos/editar-evento/editar-evento.component";
//INTERFACE -----
import { Status } from "./status";
import { Pessoa } from "./pessoa";
import { Evento } from 'src/app/Presenca/eventos/evento';
import { filter } from "rxjs";


@Component({
  selector: "app-lista-convidados",
  templateUrl: "./lista-convidados.component.html",
  styleUrls: ["./lista-convidados.component.scss", "../../navbar-adm.scss"],
})
export class ListaConvidadosComponent implements OnInit {

  @Input() convidado: any;

  listaEventos: Evento[] = [];
  listaStatus: Status[] = []; 
  listConvidados: Pessoa[] = [];
  filteredListConvidados: Pessoa[] = [];

  public id_evento: any;

  bsModalRef?: BsModalRef;
  constructor(
    private modalcontroller: ModalController,
    private route: ActivatedRoute,
    private service: ConvidadoService,
    private router: Router,
    private modalService: BsModalService
    //private ser:UsuarioService
  ) {}


  ngOnInit(): void {

    this.route.paramMap.subscribe(paramMap => {
      this.id_evento = paramMap.get('id');
      console.log('ID do Evento: '+this.id_evento);
    })

    this.service.listConvidado().subscribe((event) => {
      this.listConvidados = event.result as Pessoa[];
      this.filterList();
      console.log(this.filteredListConvidados);
    });

    this.service.listarStatus(this.id_evento).subscribe((event) => {
        this.listaStatus = event.results as Status[];
        console.log('----- Listar Status -----');
        console.log('API Response: '+event.results);
        console.log('Status: '+this.listaStatus); 
    });

    // this.service.listarStatus(this.id_evento).subscribe((event) => {
    //   console.log(event.result)
    //   if (event.result[0].total !== '0') {

    //     this.listaStatus = event.result as any;

    //     this.service.listConvidado(this.id_evento).subscribe((event) => {
    //       this.listConvidados = event.result as any;
    //     });
    //   }

    //   this.eventoService.listarUm(this.id_evento).subscribe((event) => {
    //     this.listaEvento = event.result;
    //     console.log(event.result)
    //   })
    //   console.log('Arroz '+this.listConvidados);
    //   console.log('Feijão '+this.id_evento);
    //   console.log('Ovo Frito '+this.listaStatus);
    // });

    // this.eventoService.listarUm(this.id_evento).subscribe((event) => {
    //   this.listaEventos = event.result as any;
    // })
  }

  filterList(){
    this.filteredListConvidados = this.listConvidados.filter((convidado) => convidado.id_presenca == this.id_evento);
  }


  // async edit(

  // ) {
  //   const modal = await this.modalcontroller.create({
  //     component: EditarEventoComponent,
  //     //  id_eventos:any = this.id_evento,
  //     componentProps: {
  //       id_evento: this.id_evento

  //     },

  //     cssClass: "modal",

  //   });
  //   console.log(`o id 'e ${this.id_evento}`)
  //   await modal.present();
  // }
  // async edit(){
  //   const modal= await this.modalcontroller.create({
  //     component:EditarEventoComponent,

  //     componentProps:{this.id_evento,this.evento,

  //     },
  //     cssClass:"modal",
  //   });
  //   await modal.present();

  // }

  async editP(id_evento: any, nome: any, condicao: any, anunciados: any, presenca: any) {
    const modal = await this.modalcontroller.create({
      component: EditarConvidadoComponent,
      cssClass: "modal",
      componentProps: {
        id_evento, nome,
        condicao, anunciados, presenca

      }

    })

    await modal.present();
  }


  delet() {
    console.log(this.id_evento);
    console.log(`o id 'e ${this.id_evento}`)
    this.service.delet(this.id_evento).subscribe(() => {
      this.router.navigate(["/eventos"]);
    });
  }
  deletP(nome: any, id_evento: any) {
    this.service.deletP(nome, id_evento).subscribe(() => {
      this.router.navigate([`evento_convidados/${this.id_evento}`]);
    },
      (error: any) => console.log(error))
  }


  //MODAL_PARA_ADICIONAR_CONVIDADO -----
  add() {
    const id_evento = this.id_evento;

    const initialState:ModalOptions = {
      initialState: {
        id_evento,
      }
    }
    this.bsModalRef = this.modalService.show(NovoConvidadoComponent, initialState);
    this.bsModalRef.content.closeBtnName = 'Close';
  }

  //MODAL_PARA_EDITAR_CONVIDADO -----
  edit() {
    this.bsModalRef = this.modalService.show(EditarConvidadoComponent);
    this.bsModalRef.content.closeBtnName = 'Close';
  }
}