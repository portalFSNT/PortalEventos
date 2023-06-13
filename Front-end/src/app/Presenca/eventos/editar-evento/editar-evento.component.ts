import { ModalController } from '@ionic/angular';
import { FormGroup, FormBuilder } from "@angular/forms";
import { EventoService } from "./../evento.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Component, OnInit,Input } from "@angular/core";
import { Eventoedit } from "./eventoedit";
import { Evento } from "../evento";
//import * as dayjs from 'dayjs'

@Component({
  selector: "app-editar-evento",
  templateUrl: "./editar-evento.component.html",
  styleUrls: ["./editar-evento.component.scss", "../../modal.scss"],
})
export class EditarEventoComponent implements OnInit {

 
  editarEventoForm!: FormGroup;
  listaEventos:Evento[]=[];
  @Input() id_evento:any
  constructor(
    private modalController:ModalController,
    private route: ActivatedRoute,
    private router: Router,
    private service: EventoService,
    private formBuilder: FormBuilder
  ) {
  }

  ngOnInit(): void {
    console.log(this.id_evento)
    this.editarEventoForm = this.formBuilder.group({
      descricao: [''],
      data_hora: [''],
    });
    this.service.listarUm(this.id_evento).subscribe((event)=>{
      this.listaEventos=event.result as any;
      console.log(event)
      console.log(this.listaEventos)
     // console.log(dayjs(this.listaEventos[0].data_hora).format("MM/DD/YYYY"))
      this.editarEventoForm.patchValue({
       //  data_hora:dayjs(this.listaEventos[0].data_hora).format('YYYY-MM-DD'),
        descricao:this.listaEventos[0].descricao

      })
    })
  }

  editar() {
    if (this.editarEventoForm.valid) {
      const editarEvento = this.editarEventoForm.getRawValue() as Eventoedit;
      this.service
        .edit(this.id_evento, editarEvento)
       
        .subscribe(() => this.router.navigate([`evento_convidados/${this.id_evento}`])
        );
        console.log(this.id_evento,editarEvento);
    }
  }
  salvar() {}
  cancelar() {this.modalController.dismiss()}
}
