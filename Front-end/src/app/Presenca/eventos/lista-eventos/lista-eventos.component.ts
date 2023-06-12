import { ActivatedRoute } from '@angular/router';
import { EventoService } from './../evento.service';
import { NovoEventoComponent } from './../novo-evento/novo-evento.component';
import { Component, OnInit } from '@angular/core';
import { ModalController } from "@ionic/angular";
import { Evento } from '../evento';
import { UsuariosService } from '../../home-presenca/usuarios.service';


@Component({
  selector: 'app-lista-eventos',
  templateUrl: './lista-eventos.component.html',
  styleUrls: ['./lista-eventos.component.scss',"../../navbar-adm.scss"]
})
export class ListaEventosComponent implements OnInit {
id_evento:any;
  listaEvento:Evento[]=[];
  constructor(
    private modalController:ModalController,
    private service:EventoService,
    private route:ActivatedRoute,
    private ser:UsuariosService
    ) { 
      this.route.params.subscribe(
        (params) => (this.id_evento = params["id_evento"])
            );
         
    }

  ngOnInit(): void {
    this.service.listar().subscribe((event)=>{
      this.listaEvento=event.result as Evento[]
      console.log(this.listaEvento)
    })}
async add(){
  const modal = await this.modalController.create({
    component:NovoEventoComponent,
    cssClass:'modal',
    componentProps:{
      id_evento:this.id_evento
    }
    // initialBreakpoint:1,
    // breakpoints:[0,0.4,5,1]

  });

  await modal.present();

  const res=await modal.onDidDismiss();
}
logout(){
  this.ser.logout()

}


}
