import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ConvidadoService } from './../convidado.service';
import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-novo-convidado',
  templateUrl: './novo-convidado.component.html',
  styleUrls: ['./novo-convidado.component.scss']
})
export class NovoConvidadoComponent implements OnInit {
  novoConvidadoForm!:FormGroup;
  listaConvidado : any[] = [];

@Input() id_evento:any
  constructor(
    private formBuilder:FormBuilder,
    private servie:ConvidadoService,
    private router:Router,
    private modalController:ModalController,
    private route:ActivatedRoute


  ) {
  }

  ngOnInit(): void {this.servie.listar().subscribe((event)=>{
    this.listaConvidado=event.result as any[];

  })
  this.novoConvidadoForm=this.formBuilder.group({
    nome:[''],
    condicao:[''],
    anunciados:[''],
    presenca:[''],
  })
  }
  cadastrar(){
    if(this.novoConvidadoForm.valid){
      const novoConvidado= this.novoConvidadoForm.getRawValue();
      this.servie.cadastrarconvidado(this.id_evento,novoConvidado).subscribe(
        ()=>{this.router.navigate([`/evento_convidados/${this.id_evento}`])},
        (error:any)=>{
          console.log(error)
        }
      )
  }}
salvar(){this.modalController.dismiss()}
cancelar(){ this.modalController.dismiss()}
}
