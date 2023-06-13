//import { UsuarioService } from './../../autenticacao/usuario/usuario.service';

import { EditarConvidadoComponent } from './../editar-convidado/editar-convidado.component';
import { EventoService } from './../../eventos/evento.service';
import { NovoConvidadoComponent } from "./../novo-convidado/novo-convidado.component";
import { EditarEventoComponent } from "./../../eventos/editar-evento/editar-evento.component";
import { ConvidadoService } from "./../convidado.service";
import { ModalController } from "@ionic/angular";
import { Component, Input, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Status } from "./status";
import { Pessoa } from "./pessoa";
import { Evento } from 'src/app/Presenca/eventos/evento';

@Component({
  selector: "app-lista-convidados",
  templateUrl: "./lista-convidados.component.html",
  styleUrls: ["./lista-convidados.component.scss","../../modal.scss"]
})
export class ListaConvidadosComponent implements OnInit {
  public id_evento: any;

  listaEventos:Evento[]=[];
  listaStatus:Status[] = [];
  listaPessoas:Pessoa[]= [];
listaEvento:any =[]
  constructor(
    private modalcontroller: ModalController,
    private route: ActivatedRoute,
    private service: ConvidadoService,
    
    private router: Router,
    private eventoService:EventoService,
    //private ser:UsuarioService
  ) {
    this.route.params.subscribe(
      (params) => (this.id_evento = params["id_evento"])
          );
       

  }


  ngOnInit(): void {
    this.service.listarStatus(this.id_evento).subscribe((event) => {
      console.log(event.result)
      if(event.result[0].total!=='0'){

    
      this.listaStatus = event.result as any;

      this.service.listPessoa(this.id_evento).subscribe((event) => {
        this.listaPessoas = event.result as any;
      });
    }

    this.eventoService.listarUm(this.id_evento).subscribe((event)=>{
      this.listaEvento = event.result;
      console.log(event.result)
  })
      console.log(this.listaPessoas);
      console.log(this.id_evento);
      console.log(this.listaStatus);
    });
    this.eventoService.listarUm(this.id_evento).subscribe((event)=>{
      this.listaEventos=event.result as any;
      })
  }  


  async edit( 

  ){
    const modal = await this.modalcontroller.create({
      component:EditarEventoComponent,
  //  id_eventos:any = this.id_evento,
      componentProps:{
       id_evento: this.id_evento
    
      },
      
      //cssClass:"modal",
   
    });
    console.log(`o id 'e ${this.id_evento}`)
    await modal.present();
  }
  // async edit(){
  //   const modal= await this.modalcontroller.create({
  //     component:EditarEventoComponent,

  //     componentProps:{this.id_evento,this.evento,

  //     },
  //     cssClass:"modal",
  //   });
  //   await modal.present();

  // }
  async editP( id_evento:any,nome:any, condicao:any ,anunciados:any ,presenca:any){
    const modal = await this.modalcontroller.create({
      component:EditarConvidadoComponent,
      cssClass:"modal",
      componentProps:{id_evento,nome,
        condicao,anunciados,presenca

      }
      
    })
    
await modal.present();
  }
  async add() {
    const modal = await this.modalcontroller.create({
      component: NovoConvidadoComponent,
      componentProps:{
          id_evento:this.id_evento
      },
     // cssClass: "modal",
    });
    await modal.present();
  }

  delet() {
    console.log(this.id_evento);
    console.log(`o id 'e ${this.id_evento}`)
    this.service.delet(this.id_evento).subscribe(() => {
      this.router.navigate(["/eventos"]);
    });
  }
  deletP(nome:any,id_evento:any){
    this.service.deletP(nome,id_evento).subscribe(()=>{
      this.router.navigate([`evento_convidados/${this.id_evento}`]);
    },
    (error:any)=> console.log(error))
  }
  logout(){
   // this.ser.logout()
  }
}
